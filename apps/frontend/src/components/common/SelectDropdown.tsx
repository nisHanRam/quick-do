import { capitalize, cn, getIconColor, getOptionIcon } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

const SelectDropdown = ({
  filter,
  setFilter,
  options,
  field,
  name,
  showLabel,
}: {
  filter: string;
  setFilter: (value: string) => void;
  options: string[];
  field: string;
  name?: string;
  showLabel?: boolean;
}) => {
  return (
    <div className={`${showLabel && "space-y-2"}`}>
      {showLabel && <Label {...(name && { htmlFor: name })}>{field}</Label>}
      <Select
        {...(name && { name: field })}
        value={filter}
        onValueChange={setFilter}
      >
        <SelectTrigger className="min-w-[150px] bg-card text-card-foreground hover:bg-accent/10 w-full">
          <SelectValue placeholder={field}>
            {capitalize(filter, field)}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => {
            const Icon = getOptionIcon(item);
            return (
              <SelectItem
                key={`${field}-${index}`}
                value={item}
                className="capitalize"
              >
                <Icon className={cn("w-4 h-4", getIconColor(item))} />
                {capitalize(item, field)}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDropdown;
