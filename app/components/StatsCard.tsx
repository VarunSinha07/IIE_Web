import React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatsCard;