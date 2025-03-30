import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons";
import { cn } from "../../../lib/utils";
import type { JSX, SVGProps } from "react";

type PropsType = {
  label: string;
  data: {
    value: number | string;
    growthRate: number;
  };
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function OverviewCard({ label, data, Icon }: PropsType) {
  const isDecreasing = data.growthRate < 0;

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <Icon />

      <div className="mt-8 flex items-end justify-between">
      <dl>
        <dt className="mb-2 text-heading-6 font-bold text-dark dark:text-black-6">
        {data.value}
        </dt>

        <dd className="text-lg font-bold text-dark-6">{label}</dd>
      </dl>

      {/* <dl
        className={cn(
        "text-sm font-medium",
        isDecreasing ? "text-red" : "text-green",
        )}
      >
        <dt className="flex items-center gap-1.5">
        {data.growthRate}%
        {isDecreasing ? (
          <ArrowDownIcon aria-hidden />
        ) : (
          <ArrowUpIcon aria-hidden />
        )}
        </dt>

        <dd className="sr-only">
        {label} {isDecreasing ? "Decreased" : "Increased"} by{" "}
        {data.growthRate}%
        </dd>
      </dl> */}
      </div>
    </div>
  );
}
