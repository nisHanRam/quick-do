import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SelectDropdown from "../common/SelectDropdown";

const QuickActions = ({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}: {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  priorityFilter: string;
  setPriorityFilter: (value: string) => void;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-6">
        <SelectDropdown
          filter={statusFilter}
          setFilter={setStatusFilter}
          options={["pending", "in-progress", "completed", "overdue"]}
          field="Status"
          name="status"
          showLabel
        />
        <SelectDropdown
          filter={priorityFilter}
          setFilter={setPriorityFilter}
          options={["high", "medium", "low"]}
          field="Priority"
          name="priority"
          showLabel
        />
      </CardContent>
    </Card>
  );
};

export default QuickActions;
