import { pgTable, serial, text, varchar, doublePrecision } from "drizzle-orm/pg-core";

export const productsTable  = pgTable("products", {
  id: serial("id").primaryKey(), // Automatically incrementing primary key
  name: varchar("name", { length: 255 }).notNull(), // Product name (required)
  description: text(),
  image: varchar("image", { length: 255 }), // Image URL (optional)
  price: doublePrecision("price").notNull(), // Product price (required)
});
