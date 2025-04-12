"use client";

import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  findUserByEmailAction,
  findUserByIdAction,
  getUsersAction,
} from "./action";

interface Props {
  page: number;
  dataPerPage: number;
  search?: string;
}

export const useGetUsers = ({ dataPerPage, page, search }: Props) => {
  return useQuery({
    queryKey: ["get-users", { dataPerPage, page, search }],
    queryFn: async () => {
      return await getUsersAction({ dataPerPage, page, search });
    },
  });
};

export const useFindUserById = (id?: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["find-user", id],
    queryFn: async () => {
      if (!id) {
        return null;
      }

      const res = await findUserByIdAction(id);

      if (res.error) {
        toast.error(res.error);
        return null;
      }

      return res;
    },
  });
};

export const useFindUserByEmail = (email?: string) => {
  return useQuery({
    enabled: !!email,
    queryKey: ["find-user", email],
    queryFn: async () => {
      if (!email) {
        return null;
      }

      const res = await findUserByEmailAction(email);

      if (res.error) {
        toast.error(res.error);
        return null;
      }

      return res;
    },
  });
};
