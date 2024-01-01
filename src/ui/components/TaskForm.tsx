"use client";
import { useTasks } from "@/contexts/TasksContextProvider";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

export function TaskForm() {
  const { handleCreateTask } = useTasks();

  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const taskForm = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const task = formData.get("task") as string;
    const taskValueTrimmed = task.trim();

    if (!taskValueTrimmed) {
      taskForm.reset();
      toast.error("A tarefa não pode ser vazia.");
      return;
    }

    taskForm.reset();
    handleCreateTask(taskValueTrimmed);
    toast.success("Tarefa criada com sucesso.");
  };

  return (
    <form
      className="flex flex-wrap items-center justify-center w-full gap-2 -mt-7"
      onSubmit={handleTaskSubmit}
    >
      <input
        name="task"
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="flex-1 w-full p-4 transition-colors duration-300 border rounded-lg outline-none placeholder:text-customGray300 text-customGray100 bg-customGray500 border-customGray700 focus:border-customPurple min-w-[200px]"
      />
      <button className="flex items-center justify-center gap-2 p-4 font-bold transition-colors duration-300 rounded-lg text-customGray100 bg-customDarkBlue hover:bg-customBlue">
        Criar
        <PlusCircle />
      </button>
    </form>
  );
}
