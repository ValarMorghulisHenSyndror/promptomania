import mongoose from "mongoose";


let isConnected = false;

export  const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    if(isConnected){
        console.log("MongoDB is already connected! and that's good!!!");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log("MongoDB is Connected now for real no cap");
    }catch(error){
        console.log(error);
    }
}