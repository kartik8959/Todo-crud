import express from "express";
import StudentController from "../controllers/studentController.js";

const router=express.Router();

router.get("/",StudentController.getAllDoc)
router.post("/",StudentController.createDoc)
router.get("/edit/:id",StudentController.editDoc)
router.post("/update/:id",StudentController.updateDoc)
router.post("/delete/:id",StudentController.deleteDoc)

export default router;

