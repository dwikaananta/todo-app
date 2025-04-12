import { userInsertSchema, userUpdateSchema } from "@/db/schemas/user";
import { z } from "zod";

export const userInsertValidation = z.object({ ...userInsertSchema.shape });

export const userUpdateValidation = z.object({ ...userUpdateSchema.shape });
