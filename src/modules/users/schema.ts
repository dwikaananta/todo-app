import { userSelectSchema } from "@/db/schemas/user";
import { z } from "zod";

export const userSchema = z.object({ ...userSelectSchema.shape });
