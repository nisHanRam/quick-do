import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Link } from "react-router-dom";
import { routePaths } from "@/lib/routePaths";
import type { Task } from "@/types/tasks";
import BadgeColored from "../common/BadgeColored";

const TasksTable = ({ paginatedTasks }: { paginatedTasks: Task[] }) => {
  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-secondary">
            <TableRow>
              <TableHead className="pl-6">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTasks.map((task) => (
              <TableRow key={task.id} className="cursor-pointer">
                <TableCell className="pl-6">
                  <Link to={`${routePaths.TASKS}/${task.id}`} className="block">
                    <div>
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm truncate max-w-[300px]">
                        {task.description}
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>{<BadgeColored text={task.status} />}</TableCell>
                <TableCell>{<BadgeColored text={task.priority} />}</TableCell>
                <TableCell>
                  {new Date(task.dueDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(task.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TasksTable;
