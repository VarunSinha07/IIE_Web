
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div style={{backgroundColor: "#F3F4F6"}} className={cn("py-14 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
