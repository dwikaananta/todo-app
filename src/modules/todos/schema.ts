import { todoSelectSchema } from "@/db/schemas/todo";
import { z } from "zod";

export const todoSchema = z.object({ ...todoSelectSchema.shape });
