import { clsx, type ClassValue } from "clsx";
import {
  AlarmClockOff,
  ArrowDownCircle,
  ArrowUpCircle,
  CheckCircle2,
  Clock,
  Layers,
  MinusCircle,
  RefreshCcw,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (value: string, field?: string) =>
  value === "all"
    ? `All ${field}`
    : value
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

export const getOptionIcon = (value: string) => {
  switch (value) {
    case "pending":
      return Clock;
    case "in-progress":
      return RefreshCcw;
    case "completed":
      return CheckCircle2;
    case "overdue":
      return AlarmClockOff;
    case "high":
      return ArrowUpCircle;
    case "medium":
      return MinusCircle;
    case "low":
      return ArrowDownCircle;
    default:
      return Layers;
  }
};

export const getIconColor = (value: string) => {
  switch (value) {
    case "pending":
      return "text-yellow-500";
    case "in-progress":
      return "text-sky-500";
    case "completed":
      return "text-green-500";
    case "overdue":
      return "text-red-500";
    case "high":
      return "text-orange-600";
    case "medium":
      return "text-amber-500";
    case "low":
      return "text-emerald-400";
    default:
      return "text-zinc-400";
  }
};
