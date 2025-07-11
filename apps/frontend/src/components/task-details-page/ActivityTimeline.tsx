import type { Task } from "@/types/tasks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ActivityTimeline = ({ task }: { task: Task }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
        <CardDescription>Recent updates and changes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Task created</p>
              <p className="text-sm text-primary">
                {new Date(task.createdAt).toLocaleDateString()} - Initial task
                setup
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Status updated to In Progress</p>
              <p className="text-sm text-primary">
                2 days ago - Work has begun on this task
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Priority set to High</p>
              <p className="text-sm text-primary">
                3 days ago - Increased priority due to deadline
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
