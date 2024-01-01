import { TaskForm } from "./TaskForm";
import { TasksList } from "./TasksList";
import { TasksStatus } from "./TasksStatus";

export function TasksContent() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-2xl px-4 pb-6 mx-auto">
      <TaskForm />
      <TasksStatus />
      <TasksList />
    </div>
  );
}
