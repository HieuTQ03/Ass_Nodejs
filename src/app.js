import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import router from "./routers/product"

const app=express()
app.use(express.json())
app.use(cors())
app.use("/api",router)

try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ass_hieutq");
     console.log("Success connect mongodb");
} catch (error) {
    console.log(error);
}
export  const viteNodeApp=app
