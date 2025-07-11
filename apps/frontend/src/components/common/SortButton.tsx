import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

const SortButton = ({
  sortOrder,
  setSortOrder,
}: {
  sortOrder: string;
  setSortOrder: (value: string) => void;
}) => {
  return (
    <Button
      className="w-[150px] bg-card text-card-foreground hover:bg-accent/10"
      onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
    >
      <ArrowUpDown className="h-4 w-4 mr-2" />
      {sortOrder === "newest" ? "Newest First" : "Oldest First"}
    </Button>
  );
};

export default SortButton;
