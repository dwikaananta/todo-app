"use server";

import { db } from "@/db";
import { userTable } from "@/db/schemas/user";
import { ilike, or } from "drizzle-orm";

interface Props {
  page: number;
  dataPerPage: number;
  search?: string;
}

export const getUsers = async ({ dataPerPage, page, search }: Props) => {
  const filter = (user: typeof userTable._.columns) =>
    search
      ? or(ilike(user.email, `%${search}%`), ilike(user.name, `%${search}%`))
      : undefined;

  const totalData = (
    await db.query.userTable.findMany({
      columns: { id: true },
      where: filter,
    })
  ).length;

  const users = await db.query.userTable.findMany({
    where: filter,
    orderBy: (user, { desc }) => desc(user.email),
    limit: dataPerPage,
    offset: (page - 1) * dataPerPage,
  });

  return {
    users,
    totalData,
  };
};

export const findUserById = async (id: string) => {
  return await db.query.userTable.findFirst({
    where: (user, { eq }) => eq(user.id, id),
  });
};

export const findUserByEmail = async (email: string) => {
  return await db.query.userTable.findFirst({
    where: (user, { eq }) => eq(user.email, email),
  });
};
