import express from "express";
import studentModel from "./models/student.js";
import connectDb from "./db/connectdn.js";
import web from "./routes/web.js";
const app=express();
const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017"
const port=process.env.PORT || "3300"

connectDb(DATABASE_URL);
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")
app.use("/student",web)
app.listen(port,()=>{
    console.log(`app is listening at port http://localhost:${port}`);
})