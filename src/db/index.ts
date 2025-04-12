import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

import * as todoTable from "@/db/schemas/todo";
import * as userTable from "@/db/schemas/user";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    ...userTable,
    ...todoTable,
  },
});
