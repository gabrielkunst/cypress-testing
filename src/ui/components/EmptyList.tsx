import { ClipboardIcon } from "./ClipboardIcon";

export function EmptyList() {
  return (
    <div className="flex flex-col items-center justify-center d text-customGray300">
      <ClipboardIcon />
      <span className="mt-2 font-bold">
        Você ainda não tem tarefas cadastradas
      </span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
