import { Edit3, Save, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import BadgeColored from "../common/BadgeColored";
import type { Task } from "@/types/tasks";
import { toast } from "sonner";

const TaskInfo = ({
  task,
  setTask,
  isEditing,
  setIsEditing,
  editedDescription,
  setEditedDescription,
}: {
  task: Task;
  setTask: (value: Task) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  editedDescription: string;
  setEditedDescription: (value: string) => void;
}) => {
  const saveDescription = () => {
    setTask({ ...task, description: editedDescription });
    setIsEditing(false);
    toast.success("Task description updated successfully!");
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl mb-2">{task.title}</CardTitle>
            <div className="flex items-center space-x-3">
              {<BadgeColored text={task.status} />}
              {<BadgeColored text={task.priority} />}
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
  );
};

export default TaskInfo;
