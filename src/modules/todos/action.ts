"use server";

import { z } from "zod";
import {
  deleteTodo,
  findTodoById,
  getTodos,
  storeTodo,
  updateTodo,
} from "./data";
import { todoInsertValidation, todoUpdateValidation } from "./validation";

interface Props {
  page: number;
  dataPerPage: number;
  search?: string;
}

export const getTodosAction = async ({ dataPerPage, page, search }: Props) => {
  return await getTodos({ dataPerPage, page, search });
};

export const findTodoByIdAction = async (id: string) => {
  const todo = await findTodoById(id);

  if (!todo) {
    return { error: "Todo doesn't exist!" };
  }

  return { todo };
};

export const storeTodoAction = async (
  values: z.infer<typeof todoInsertValidation>
): Promise<{ success?: string; error?: string }> => {
  const parsed = todoInsertValidation.safeParse(values);

  if (!parsed.success) {
    return { error: "Invalid fields!" };
  }

  return await storeTodo(values);
};

export const updateTodoAction = async (
  id: string,
  values: z.infer<typeof todoUpdateValidation>
): Promise<{ success?: string; error?: string }> => {
  const parsed = todoUpdateValidation.safeParse(values);

  if (!parsed.success) {
    return { error: "Invalid fields!" };
  }

  return await updateTodo(id, values);
};

export const deleteTodoAction = async (id: string) => {
  return await deleteTodo(id);
};
