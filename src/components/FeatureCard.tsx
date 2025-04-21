
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-[#1A1F2C] p-6 rounded-lg border border-[#33373E] hover:border-[#9b87f5]/50 transition-all hover-scale",
      className
    )}>
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#9b87f5]/10 text-[#9b87f5]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
