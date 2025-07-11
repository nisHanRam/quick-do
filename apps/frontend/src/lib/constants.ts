import type { Task } from "@/types/tasks";

export const tasksPerPage = 5;

export const dummyTasks: Task[] = [
  {
    id: "1",
    title: "Design new landing page",
    description:
      "Create a modern and responsive landing page for the new product launch",
    status: "in-progress",
    priority: "high",
    dueDate: "2024-01-20",
    createdAt: "2024-01-10",
  },
  {
    id: "2",
    title: "Update user documentation",
    description: "Review and update all user-facing documentation",
    status: "pending",
    priority: "medium",
    dueDate: "2024-01-25",
    createdAt: "2024-01-12",
  },
  {
    id: "3",
    title: "Fix payment integration bug",
    description: "Resolve the issue with payment processing on checkout",
    status: "completed",
    priority: "high",
    dueDate: "2024-01-15",
    createdAt: "2024-01-08",
  },
  {
    id: "4",
    title: "Conduct user interviews",
    description: "Interview 10 users about the new feature requirements",
    status: "pending",
    priority: "low",
    dueDate: "2024-01-30",
    createdAt: "2024-01-14",
  },
  {
    id: "5",
    title: "Optimize database queries",
    description: "Improve performance of slow database queries",
    status: "overdue",
    priority: "medium",
    dueDate: "2024-01-18",
    createdAt: "2024-01-05",
  },
  {
    id: "6",
    title: "Implement dark mode",
    description: "Add a dark mode option to the application settings",
    status: "in-progress",
    priority: "medium",
    dueDate: "2024-02-05",
    createdAt: "2024-01-22",
  },
  {
    id: "7",
    title: "Write unit tests for API",
    description: "Cover all critical API endpoints with unit tests",
    status: "pending",
    priority: "high",
    dueDate: "2024-02-10",
    createdAt: "2024-01-25",
  },
  {
    id: "8",
    title: "Redesign onboarding flow",
    description: "Simplify and improve the onboarding experience for new users",
    status: "in-progress",
    priority: "high",
    dueDate: "2024-02-15",
    createdAt: "2024-01-28",
  },
  {
    id: "9",
    title: "Audit third-party libraries",
    description: "Check for outdated or vulnerable third-party packages",
    status: "completed",
    priority: "low",
    dueDate: "2024-01-31",
    createdAt: "2024-01-18",
  },
  {
    id: "10",
    title: "Prepare quarterly report",
    description: "Compile team performance and metrics for Q1",
    status: "pending",
    priority: "medium",
    dueDate: "2024-02-20",
    createdAt: "2024-01-30",
  },
];

export const tasksByStatus = [
  { name: "Completed", value: 45, color: "fill-chart-1" },
  { name: "In Progress", value: 23, color: "fill-chart-2" },
  { name: "Pending", value: 12, color: "fill-chart-3" },
  { name: "Overdue", value: 8, color: "fill-chart-4" },
];

export const weeklyProgress = [
  { day: "Mon", completed: 5, created: 8 },
  { day: "Tue", completed: 7, created: 6 },
  { day: "Wed", completed: 4, created: 9 },
  { day: "Thu", completed: 8, created: 5 },
  { day: "Fri", completed: 6, created: 7 },
  { day: "Sat", completed: 3, created: 4 },
  { day: "Sun", completed: 2, created: 3 },
];

export const priorityDistribution = [
  { priority: "High", count: 15, color: "fill-chart-2" },
  { priority: "Medium", count: 28, color: "fill-chart-4" },
  { priority: "Low", count: 45, color: "fill-chart-3" },
];
