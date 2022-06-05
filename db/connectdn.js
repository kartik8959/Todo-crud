import mongoose from "mongoose";
const connectDb= async (DATABASE_URL)=>{
    try{
const DB_OPTION={
dbName:"school"
}
await mongoose.connect(DATABASE_URL,DB_OPTION)
console.log("Database connection made successfully !")
    }
    catch(error){
        console.log(error);
    }

}


export default connectDb