"use client";
import { useTasks } from "@/contexts/TasksContextProvider";

export function TasksStatus() {
  const { totalDoneTasks, totalTasks } = useTasks();

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-10 mb-4 mb:flex-row mb:justify-between gap-y-4">
      <div className="flex items-center justify-center gap-2 font-bold">
        <span className="text-sm text-customBlue">Tarefas criadas</span>
        <span className="px-2 py-1 text-xs rounded-full text-customGray200 bg-customGray400">
          {totalTasks}
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 font-bold">
        <span className="text-sm text-customPurple">Concluídas</span>
        <span className="px-2 py-1 text-xs rounded-full text-customGray200 bg-customGray400 min-w-[3.5rem] text-center">
          {totalDoneTasks} de {totalTasks}
        </span>
      </div>
    </div>
  );
}
