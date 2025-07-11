import SearchInput from "../common/SearchInput";
import SelectDropdown from "../common/SelectDropdown";
import SortButton from "../common/SortButton";

const TasksTableFilters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortOrder,
  setSortOrder,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  priorityFilter: string;
  setPriorityFilter: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex-1 min-w-[200px]">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <SelectDropdown
        filter={statusFilter}
        setFilter={setStatusFilter}
        options={["all", "pending", "in-progress", "completed", "overdue"]}
        field="Status"
      />

      <SelectDropdown
        filter={priorityFilter}
        setFilter={setPriorityFilter}
        options={["all", "high", "medium", "low"]}
        field="Priority"
      />

      <SortButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </div>
  );
};

export default TasksTableFilters;
