import express from "express"
import { create, getAll, getOne, remove, update } from "../controllers/product";

const router=express.Router();
router.route("/products").get(getAll).post(create)
router.route("/products/:id").get(getOne).patch(update).delete(remove)
export default router
