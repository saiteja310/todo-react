import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todo.controller"

const todoRouter: Router = Router()

todoRouter.get("/api/todos", getTodos)

todoRouter.post("/api/todos", addTodo)

todoRouter.put("/api/todos/:id", updateTodo)

todoRouter.delete("/api/todos/:id", deleteTodo)

export default todoRouter;