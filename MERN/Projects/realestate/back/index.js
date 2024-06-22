import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import  { userAuthRouter } from "./Routes/userAuthRoute.js";
// import userApiRoute from "./Routes/userApiRoute";
const app = express();
app.use(cors(
    {
        origin:'http://localhost:3000',
        credentials:true,
        allowedHeaders:['Content-Type','Authorization'],
        exposedHeaders:['Content-Type','Authorization'],
        methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue:false,
        optionsSuccessStatus:204,
    }
));
dotenv.config({path:'./environment-variables/secret.env'});


const port=process.env.PORT;
console.log(port);

app.use(express.json());
app.use(cookieParser());
app.use('/auth',userAuthRouter);
app.use('/app',userApiRoute);
mongoose.connect(process.env.MONGODB_URI);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

