"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import {
  deleteTodoAction,
  findTodoByIdAction,
  getTodosAction,
  storeTodoAction,
  updateTodoAction,
} from "./action";
import { todoInsertValidation } from "./validation";

interface Props {
  page: number;
  dataPerPage: number;
  search?: string;
}

export const useGetTodos = ({ dataPerPage, page, search }: Props) => {
  return useQuery({
    queryKey: ["get-todos", { dataPerPage, page, search }],
    queryFn: async () => {
      return await getTodosAction({ dataPerPage, page, search });
    },
  });
};

export const useFindTodoById = (id?: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["find-todo", id],
    queryFn: async () => {
      if (!id) {
        return null;
      }

      const res = await findTodoByIdAction(id);

      if (res.error) {
        toast.error(res.error);
        return null;
      }

      return res;
    },
  });
};

export const useStoreTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      values,
    }: {
      values: z.infer<typeof todoInsertValidation>;
    }) => {
      const res = await storeTodoAction(values);

      if (res.error) {
        toast.error(res.error);
        return null;
      }

      if (res.success) {
        toast.success(res.success);
      }

      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-todos"] });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      values,
    }: {
      id: string;
      values: z.infer<typeof todoInsertValidation>;
    }) => {
      const res = await updateTodoAction(id, values);

      if (res.error) {
        toast.error(res.error);
        return null;
      }

      if (res.success) {
        toast.success(res.success);
      }

      return res;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["get-todos"] });
      queryClient.invalidateQueries({ queryKey: ["find-todo", variables.id] });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const res = await deleteTodoAction(id);

      if (res.success) {
        toast.success(res.success);
      }

      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-todos"] });
    },
  });
};
