"use client";
import { TaskType } from "@/@types/TaskType";
import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

interface TasksProviderProps {
  children: React.ReactNode;
}

interface TasksContextProps {
  tasks: TaskType[];
  handleDeleteTask: (_id: string) => void;
  handleToggleTask: (_id: string) => void;
  handleCreateTask: (_content: string) => void;
  totalTasks: number;
  totalDoneTasks: number;
}

const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  totalTasks: 0,
  totalDoneTasks: 0,
  handleCreateTask: () => {},
  handleDeleteTask: () => {},
  handleToggleTask: () => {},
});

export function useTasks() {
  return useContext(TasksContext);
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  // temp variables
  const totalTasks = tasks.length;
  const totalDoneTasks = tasks.filter((task) => task.isDone).length;

  const handleCreateTask = (content: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        content,
        createdAt: Date.now(),
        id: Math.floor(Math.random() * 999).toString(),
        isDone: false,
      },
    ]);
  };
  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success("Tarefa deletada com sucesso.");
  };
  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
    toast.success("Tarefa atualizada com sucesso.");
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        totalDoneTasks,
        totalTasks,
        handleCreateTask,
        handleDeleteTask,
        handleToggleTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
