import { capitalize, getOptionIcon } from "@/lib/utils";
import { Badge } from "../ui/badge";

const BadgeColored = ({ text }: { text: string }) => {
  const colors = {
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-sky-100 text-sky-800",
    completed: "bg-green-100 text-green-800",
    overdue: "bg-red-100 text-red-800",
    low: "bg-emerald-100 text-emerald-800",
    medium: "bg-amber-100 text-amber-800",
    high: "bg-orange-100 text-orange-800",
  } as const;

  const Icon = getOptionIcon(text);

  return (
    <Badge
      className={`${colors[text as keyof typeof colors]} rounded-full tracking-wide`}
    >
      <Icon />
      {capitalize(text)}
    </Badge>
  );
};

export default BadgeColored;
