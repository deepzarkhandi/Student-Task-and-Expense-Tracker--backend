import express from "express"
import Expense from "../models/Expense.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const expenses = await Expense.find()
  res.json(expenses)
})

router.post("/", async (req, res) => {
  const expense = await Expense.create(req.body)
  res.json(expense)
})

router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id)
  res.json("Deleted")
})

export default router