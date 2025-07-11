import React, { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import SelectDropdown from "../common/SelectDropdown";
import type { Task } from "@/types/tasks";
import { toast } from "sonner";

const CreateTaskDialog = ({
  tasks,
  setTasks,
  setIsDialogOpen,
}: {
  tasks: Task[];
  setTasks: (updatedTasks: Task[]) => void;
  setIsDialogOpen: (value: boolean) => void;
}) => {
  const [statusFilter, setStatusFilter] = useState("pending");
  const [priorityFilter, setPriorityFilter] = useState("low");

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTask: Task = {
      id: Date.now().toString(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      status: formData.get("status") as Task["status"],
      priority: formData.get("priority") as Task["priority"],
      dueDate: formData.get("dueDate") as string,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setTasks([newTask, ...tasks]);
    setIsDialogOpen(false);
    toast.success("Task created successfully!");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleCreateTask} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Enter task description"
          rows={3}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
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
      </div>
      <div className="space-y-2">
        <Label htmlFor="dueDate">Due Date</Label>
        <Input id="dueDate" name="dueDate" type="date" required />
      </div>
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsDialogOpen(false)}
        >
          Cancel
        </Button>
        <Button type="submit">Create Task</Button>
      </div>
    </form>
  );
};

export default CreateTaskDialog;
