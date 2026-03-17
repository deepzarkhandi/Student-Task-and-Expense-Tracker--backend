import express from "express"
import cors from "cors"
import connectDB from "./config/db.js";


import authRoutes from "./routes/auth.js"
import taskRoutes from "./routes/tasks.js"
import expenseRoutes from "./routes/expenses.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/tasks",taskRoutes)
app.use("/api/expenses",expenseRoutes)

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅Server running on port ${PORT}`);
});
