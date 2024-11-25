import express from "express";
import { GetAllUser, GetOneUser, Login, Register } from "../controller/auth.js";
import {
  CreateTodo,
  DeleteTodo,
  GetAllTodo,
  UpdateTodo,
} from "../controller/todo.js";
import { CreateCategory, GetAllCategory } from "../controller/category.js";

const router = express.Router();

router.post("/reg", Register);
router.post("/login", Login);
router.get("/users/all", GetAllUser);
router.get("/users/:id", GetOneUser);

router.post("/todo/create", CreateTodo);
router.get("/todo/getall", GetAllTodo);
router.put("/todo/update/:id", UpdateTodo);
router.delete("/todo/delete/:id", DeleteTodo);

router.post("/category/create", CreateCategory);
router.get("/category/getall", GetAllCategory);

export default router;
