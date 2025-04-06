import { Card } from "../components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MentorProps {
  mentor: {
    id: number;
    name: string;
    title: string;
    expertise: string;
    image: string;
    background: string;
  };
}

const MentorCard = ({ mentor }: MentorProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden border-none shadow-lg transition-transform duration-300 hover:-translate-y-1",
        mentor.background
      )}
    >
      <div className="p-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
          <Image
            src={mentor.image}
            alt={mentor.name}
            className="w-full h-full object-cover"
            width={128}
            height={128}
            onError={() => {
              // Handle error gracefully
            }}
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
          <p className="text-orange-600 font-semibold mb-2">{mentor.title}</p>
          <p className="text-gray-600 text-sm">{mentor.expertise}</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-3 text-white text-center">
        <button className="font-medium hover:underline">Connect</button>
      </div>
    </Card>
  );
};

export default MentorCard;
