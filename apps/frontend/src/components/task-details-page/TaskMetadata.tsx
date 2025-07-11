import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar, Clock, Flag, User } from "lucide-react";
import type { Task } from "@/types/tasks";

const TaskMetadata = ({ task }: { task: Task }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <Calendar className="h-4 w-4 text-slate-500" />
          <div>
            <p className="text-sm font-medium">Due Date</p>
            <p className="text-sm text-slate-600">
              {new Date(task.dueDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Clock className="h-4 w-4 text-slate-500" />
          <div>
            <p className="text-sm font-medium">Created</p>
            <p className="text-sm text-slate-600">
              {new Date(task.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <User className="h-4 w-4 text-slate-500" />
          <div>
            <p className="text-sm font-medium">Assigned to</p>
            <p className="text-sm text-slate-600">John Doe</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Flag className="h-4 w-4 text-slate-500" />
          <div>
            <p className="text-sm font-medium">Days Remaining</p>
            <p className="text-sm text-slate-600">
              {Math.ceil(
                (new Date(task.dueDate).getTime() - new Date().getTime()) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
              days
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskMetadata;
