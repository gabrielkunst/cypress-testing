import { TasksProvider } from "@/contexts/TasksContextProvider";
import { Header } from "@/ui/components/Header";
import { TasksContent } from "@/ui/components/TasksContent";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <TasksProvider>
      <Toaster closeButton duration={2000} theme="dark" richColors />
      <main className="min-h-[100svh] bg-customGray600 flex flex-col">
        <Header />
        <TasksContent />
      </main>
    </TasksProvider>
  );
}
