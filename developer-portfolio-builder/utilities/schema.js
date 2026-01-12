const { pgTable, serial, varchar } = require("drizzle-orm/pg-core");
const { use } = require("react");

export const UserInfo = pgTable("user_info", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    username: varchar("username", { length: 50 }).notNull(),
}
);