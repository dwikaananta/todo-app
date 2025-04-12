import { pgTable, text } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { userTable } from "./user";

export const todoTable = pgTable("todo", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

export const todoSelectSchema = createSelectSchema(todoTable);

export const todoInsertSchema = createInsertSchema(todoTable).omit({
  id: true,
});

export const todoUpdateSchema = createUpdateSchema(todoTable).omit({
  id: true,
});
