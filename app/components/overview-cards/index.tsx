import React from "react";
import {
  CircleDollarSign,
  Users,
  CalendarDays,
  SquareStack,
  Briefcase,
  Rocket,
} from "lucide-react";
import StatsCard from "./card";

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            style={{
              fontWeight: "bold",
              marginBottom: "1rem",

              WebkitBackgroundClip: "text",
              color: "black",
            }}
            className="text-4xl sm:text-6xl font-bold"
          >
            Our Stats Overview.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <StatsCard
              icon={<CircleDollarSign size={32} />}
              value="₹250K"
              label="Funds raised by our startups"
              color="#1FC281"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <StatsCard
              icon={<Briefcase size={32} />}
              value="₹15M"
              label="Corpus Fund"
              color="#F69B15"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <StatsCard
              icon={<SquareStack size={32} />}
              value="130"
              label="Pre-Incubation Projects"
              color="#9449F3"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <StatsCard
              icon={<CalendarDays size={32} />}
              value="250"
              label="Events Organized"
              color="#40ABEC"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <StatsCard
              icon={<Rocket size={32} />}
              value="46"
              label="Incubated Startups"
              color="#9239EC"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <StatsCard
              icon={<Users size={32} />}
              value="2"
              label="Technology Transfers"
              color="#3B91F7"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
