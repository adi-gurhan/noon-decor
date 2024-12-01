import { pgTable, serial, text, varchar, doublePrecision } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(), // Automatically incrementing primary key
  name: varchar("name", { length: 255 }).notNull(), // Product name (required)
  description: text(), // Product description (optional)
  image: varchar("image", { length: 255 }), // Image URL (optional)
  price: doublePrecision("price").notNull(), // Product price (required)
});
