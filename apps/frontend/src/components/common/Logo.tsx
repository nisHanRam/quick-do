import { CheckCircle } from "lucide-react";

const Logo = () => {
  return (
      <div className="flex items-center space-x-2">
        <CheckCircle className="h-8 w-8" />
        <span className="text-2xl font-bold">QuickDo</span>
      </div>
  );
};

export default Logo;
