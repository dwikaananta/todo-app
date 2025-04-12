import { todoInsertSchema } from "@/db/schemas/todo";
import { z } from "zod";

export const todoInsertValidation = z
  .object({ ...todoInsertSchema.shape })
  .omit({ userId: true });

export const todoUpdateValidation = z
  .object({ ...todoInsertSchema.shape })
  .omit({ userId: true });
