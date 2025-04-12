import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const userTable = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const userSelectSchema = createSelectSchema(userTable);

export const userInsertSchema = createInsertSchema(userTable).omit({
  id: true,
});

export const userUpdateSchema = createUpdateSchema(userTable).omit({
  id: true,
});
