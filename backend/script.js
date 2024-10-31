import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import { drizzle } from "drizzle-orm/mysql2";
import {int, varchar,text, mysqlTable } from "drizzle-orm/mysql-core";
import { eq } from "drizzle-orm";

const app = express();

// Setup MySQL connection using mysql2
const connection = await mysql.createConnection({
  host: "localhost",
  user: "Praisejah",
  password: "password",
  database: "budget_db",
});

// Initialize Drizzle ORM with the connection
const db = drizzle(connection);

// Schema definition
const items = mysqlTable("items", {
  id: int("id").primaryKey().autoincrement().notNull(),
  name: varchar("name", {length:255}).notNull(),
  price: int("price").notNull(),
  description: text("description"),
  quantity: int("quantity").notNull(),
});

// Middleware
app.use(cors());
app.use(express.json());


// Route to check the backend
app.get("/", (req, res) => {
  res.json("This is the backend");
});

// Get all items from MySQL
app.get("/items", async (req, res) => {
  try{
    const result = await db.select().from(items);
    if (!Array.isArray(result)) {
      return res.status(500).json({ error: "Unexpected data format" });
    }
    return res.json(result);
  } catch(error){
   res.status(500).json(error);
  }
})

// Add a new item
app.post("/items",async(req,res)=>{
  try{
   await db
   .insert(items)
   .values({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    quantity:req.body.quantity,
   })
   .$returningId();
   return res.json("item added successfully")
  }catch (error){
     res.status(500).json(error);
  }
})

// Delete an item
app.delete("/items/:id",async (req,res) => {
  const itemId = req.params.id;
  try{
   await db.delete(items).where(eq(items.id, itemId));
   return res.json("item deleted successfully")
  }catch{
   console.log(error)
   res.status(500).json("Error deleting item");
  }
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
