import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import QuickActions from "@/components/task-details-page/QuickActions";
import TaskMetadata from "@/components/task-details-page/TaskMetadata";
import TaskInfo from "@/components/task-details-page/TaskInfo";
import { dummyTasks } from "@/lib/constants";
import ActivityTimeline from "@/components/task-details-page/ActivityTimeline";
import { routePaths } from "@/lib/routePaths";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed" | "overdue";
  priority: "low" | "medium" | "high";
  dueDate: string;
  createdAt: string;
}

const TaskDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("pending");
  const [priorityFilter, setPriorityFilter] = useState("low");
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  const [task, setTask] = useState<Task>(dummyTasks[0]);

  useEffect(() => {
    setEditedDescription(task.description);
  }, [task.description]);

  const updateTaskStatus = (newStatus: Task["status"]) => {
    setTask({ ...task, status: newStatus });
    toast.success("Task status updated successfully!");
  };

  const updateTaskPriority = (newPriority: Task["priority"]) => {
    setTask({ ...task, priority: newPriority });
    toast.success("Task priority updated successfully!");
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6">
      <div className="flex items-center space-x-4 mb-6">
        <Link to={routePaths.TASKS}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tasks
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Task Details</h1>
          <p className="text-primary">Manage and update task information</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TaskInfo
            task={task}
            setTask={setTask}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            editedDescription={editedDescription}
            setEditedDescription={setEditedDescription}
          />
          <ActivityTimeline task={task} />
        </div>

        <div className="space-y-6">
          <QuickActions
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
          />
          <TaskMetadata task={task} />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
