"use client";
import { useTasks } from "@/contexts/TasksContextProvider";
import { EmptyList } from "./EmptyList";
import { Task } from "./Task";

export function TasksList() {
  const { tasks } = useTasks();

  return (
    <section
      data-test="tasks-list"
      className={`flex flex-col gap-3 flex-1   ${
        tasks.length === 0 &&
        "border-t-2 rounded-lg text-center border-customGray400 items-center justify-center p-4 "
      }`}
    >
      {tasks.length === 0 ? (
        <EmptyList />
      ) : (
        tasks.map((task) => <Task key={task.id} {...task} />)
      )}
    </section>
  );
}
