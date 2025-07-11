import { Search } from "lucide-react";
import { type ChangeEvent } from "react";
import { Input } from "../ui/input";

const SearchInput = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted h-4 w-4" />
      <Input
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(event.target.value)
        }
        className="pl-10 bg-card text-card-foreground"
      />
    </div>
  );
};

export default SearchInput;
