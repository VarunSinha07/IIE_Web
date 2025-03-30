"use client";

import { useEffect, useState } from "react";
import { compactFormat } from "../../../lib/format-number";
import { getOverviewData } from "./fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export function OverviewCardsGroup() {
  const [data, setData] = useState<{
    fundsStartup: any;
    corpousFund: any;
    incubationProjects: any;
    eventOrg: any;
    incubatedStartup: any;
    technologyTransfer: any;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const overviewData = await getOverviewData();
      setData(overviewData);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Add a loading state
  }

  const { fundsStartup, corpousFund, incubationProjects, eventOrg,incubatedStartup,technologyTransfer } = data;

  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            Our Stats Overview.
          </h3>
          {/* <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">We work in several verticals.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">We work in several verticals.</h3> */}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 2xl:grid-cols-3 2xl:gap-7.5">
        <OverviewCard
          label="Funds raised by our startups"
          data={{
            ...fundsStartup,
            value: "₹" + compactFormat(fundsStartup.value),
          }}
          Icon={icons.Views}
        />

        <OverviewCard
          label="Corpus Fund"
          data={{
            ...corpousFund,
            value: "₹" + compactFormat(corpousFund.value),
          }}
          Icon={icons.Profit}
        />

        <OverviewCard
          label="Pre-Incubation Projects"
          data={{
            ...incubationProjects,
            value: compactFormat(incubationProjects.value),
          }}
          Icon={icons.Product}
        />

        <OverviewCard
          label="Events Organized"
          data={{
            ...eventOrg,
            value: compactFormat(eventOrg.value),
          }}
          Icon={icons.Users}
        />

        <OverviewCard
          label="Incubated Startups"
          data={{
            ...incubatedStartup,
            value: compactFormat(incubatedStartup.value),
          }}
          Icon={icons.Product}
        />

        <OverviewCard
          label="Technology Transfers"
          data={{
            ...technologyTransfer,
            value: compactFormat(technologyTransfer.value),
          }}
          Icon={icons.Users}
        />
      </div>
    </>
  );
}

export default OverviewCardsGroup;
