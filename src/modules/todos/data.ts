"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { todoTable } from "@/db/schemas/todo";
import { and, eq, ilike, or } from "drizzle-orm";
import { z } from "zod";
import { todoInsertValidation, todoUpdateValidation } from "./validation";

interface Props {
  page: number;
  dataPerPage: number;
  search?: string;
}

export const getTodos = async ({ dataPerPage, page, search }: Props) => {
  const session = await auth();

  const filter = (todo: typeof todoTable._.columns) =>
    and(
      session?.user?.id ? eq(todo.userId, session.user?.id) : undefined,
      search
        ? or(
            ilike(todo.title, `%${search}%`),
            ilike(todo.description, `%${search}%`)
          )
        : undefined
    );

  const totalData = (
    await db.query.todoTable.findMany({
      columns: { id: true },
      where: filter,
    })
  ).length;

  const todos = await db.query.todoTable.findMany({
    where: filter,
    orderBy: (todo, { desc }) => desc(todo.title),
    limit: dataPerPage,
    offset: (page - 1) * dataPerPage,
  });

  return {
    todos,
    totalData,
  };
};

export const findTodoById = async (id: string) => {
  return await db.query.todoTable.findFirst({
    where: (todo, { eq }) => eq(todo.id, id),
  });
};

export const storeTodo = async (
  values: z.infer<typeof todoInsertValidation>
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: "Unauthorized user!" };
  }

  await db.insert(todoTable).values({ ...values, userId: session.user.id });

  return { success: "Todo has stored!" };
};

export const updateTodo = async (
  id: string,
  values: z.infer<typeof todoUpdateValidation>
) => {
  const [todoUpdated] = await db
    .update(todoTable)
    .set(values)
    .where(eq(todoTable.id, id))
    .returning();

  return { success: "Todo has updated!", todo: todoUpdated };
};

export const deleteTodo = async (id: string) => {
  await db.delete(todoTable).where(eq(todoTable.id, id));

  return { success: "Todo has deleted!" };
};
