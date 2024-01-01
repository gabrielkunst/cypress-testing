"use client";
import { TaskType } from "@/@types/TaskType";
import { useTasks } from "@/contexts/TasksContextProvider";
import { CheckCircle2, Circle, Trash2 } from "lucide-react";

export function Task({ id, isDone, content }: TaskType) {
  const { handleDeleteTask, handleToggleTask } = useTasks();

  return (
    <div className="flex items-center justify-between gap-3 p-4 text-sm rounded-lg bg-customGray500 text-customGray100">
      <button onClick={() => handleToggleTask(id)}>
        {isDone ? (
          <CheckCircle2 className="w-5 h-auto text-customPurple" />
        ) : (
          <Circle className="w-5 h-auto text-customBlue" />
        )}
      </button>
      <p className={`flex-1 ${isDone && "text-customGray300 line-through"}`}>
        {content}
      </p>
      <button onClick={() => handleDeleteTask(id)}>
        <Trash2 className="w-5 h-auto text-customGray300" />
      </button>
    </div>
  );
}
