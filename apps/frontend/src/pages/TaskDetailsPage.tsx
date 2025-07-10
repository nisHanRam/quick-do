import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Flag,
  User,
  Edit3,
  Save,
  X,
} from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  // Mock task data - in a real app, this would come from an API
  const [task, setTask] = useState<Task>({
    id: "1",
    title: "Design new landing page",
    description:
      "Create a modern and responsive landing page for the new product launch. This includes wireframing, designing, and implementing the page with proper SEO optimization and mobile responsiveness.",
    status: "in-progress",
    priority: "high",
    dueDate: "2024-01-20",
    createdAt: "2024-01-10",
  });

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

  const saveDescription = () => {
    setTask({ ...task, description: editedDescription });
    setIsEditing(false);
    toast.success("Task description updated successfully!");
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      "in-progress": "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      overdue: "bg-red-100 text-red-800",
    } as const;

    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {status.replace("-", " ")}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      low: "bg-gray-100 text-gray-800",
      medium: "bg-orange-100 text-orange-800",
      high: "bg-red-100 text-red-800",
    } as const;

    return (
      <Badge className={colors[priority as keyof typeof colors]}>
        {priority}
      </Badge>
    );
  };

  const getPriorityIcon = (priority: string) => {
    const icons = {
      low: "🟢",
      medium: "🟡",
      high: "🔴",
    };
    return icons[priority as keyof typeof icons];
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      pending: "⏳",
      "in-progress": "🔄",
      completed: "✅",
      overdue: "🚨",
    };
    return icons[status as keyof typeof icons];
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <Link to="/tasks">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tasks
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Task Details</h1>
          <p className="text-slate-600">Manage and update task information</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Task Info */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">{task.title}</CardTitle>
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(task.status)}
                    {getPriorityBadge(task.priority)}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Description</h3>
                    {!isEditing && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsEditing(true)}
                      >
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  {isEditing ? (
                    <div className="space-y-2">
                      <Textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        rows={4}
                        className="resize-none"
                      />
                      <div className="flex space-x-2">
                        <Button size="sm" onClick={saveDescription}>
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setIsEditing(false);
                            setEditedDescription(task.description);
                          }}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-600 leading-relaxed">
                      {task.description}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Recent updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Task created</p>
                    <p className="text-sm text-slate-500">
                      {new Date(task.createdAt).toLocaleDateString()} - Initial
                      task setup
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Status updated to In Progress</p>
                    <p className="text-sm text-slate-500">
                      2 days ago - Work has begun on this task
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Priority set to High</p>
                    <p className="text-sm text-slate-500">
                      3 days ago - Increased priority due to deadline
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {getStatusIcon(task.status)} Update Status
                </label>
                <Select value={task.status} onValueChange={updateTaskStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">⏳ Pending</SelectItem>
                    <SelectItem value="in-progress">🔄 In Progress</SelectItem>
                    <SelectItem value="completed">✅ Completed</SelectItem>
                    <SelectItem value="overdue">🚨 Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  {getPriorityIcon(task.priority)} Update Priority
                </label>
                <Select
                  value={task.priority}
                  onValueChange={updateTaskPriority}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">🟢 Low</SelectItem>
                    <SelectItem value="medium">🟡 Medium</SelectItem>
                    <SelectItem value="high">🔴 High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Task Metadata */}
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
                      (new Date(task.dueDate).getTime() -
                        new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    days
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
