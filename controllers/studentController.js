import studentModel from "../models/student.js";

class StudentController{
    //  create document
    
    static createDoc= async(req,res)=>{
        //create document
        try{
           const {name,age,fees}=req.body
           const doc=new studentModel({
               name:name,
               age:age,
               fees:fees
           })
           const result =await doc.save()
           console.log(result);
            res.redirect("/student")
        }
        catch(error){
console.log(error);
        }
       

    }

    static getAllDoc=async (req,res)=>{
        try{
            let result=await studentModel.find();
            res.render("index",{data:result})
        }
        catch(error){
            console.log(error)
        }
        
    }
    static editDoc= async (req,res)=>{
        try{
            const result =await studentModel.findById(req.params.id);
            // console.log(result);
            res.render("edit",{data:result})
        }
        catch(error){
            console.log(error);
        }

    }

    static updateDoc=async (req,res)=>{
        try{
            let result = await studentModel.findByIdAndUpdate(req.params.id,req.body);
            // console.log(result);
            res.redirect("/student")
        
        }
        catch(error){
            console.log(error);
        }
    }

    static deleteDoc= async(req,res)=>{
        try{
            let result = await studentModel.findByIdAndDelete(req.params.id);
            console.log(result);
            res.redirect("/student")
        
        }
        catch(error){
            console.log(error);
        }

    }
}

export default StudentController;