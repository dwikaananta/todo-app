import { CreateTodo } from "@/features/todos/create";
import { EditTodo } from "@/features/todos/edit";
import { FindTodo } from "@/features/todos/find";
import { FindUser } from "@/features/users/find";

export const ComponentProvider = () => {
  return (
    <>
      {/* Users */}
      <FindUser />

      {/* Todos */}
      <FindTodo />
      <CreateTodo />
      <EditTodo />
    </>
  );
};
