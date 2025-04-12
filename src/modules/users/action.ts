"use server";

import { findUserByEmail, findUserById, getUsers } from "./data";

interface Props {
  page: number;
  dataPerPage: number;
  search?: string;
}

export const getUsersAction = async ({ dataPerPage, page, search }: Props) => {
  return await getUsers({ dataPerPage, page, search });
};

export const findUserByEmailAction = async (email: string) => {
  const user = await findUserByEmail(email);

  if (!user) {
    return { error: "User doesn't exist!" };
  }

  return { user };
};

export const findUserByIdAction = async (id: string) => {
  const user = await findUserById(id);

  if (!user) {
    return { error: "User doesn't exist!" };
  }

  return { user };
};
