import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { UserRouter } from './Routes/Router.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }
));
app.use(cookieParser());
app.use(express.json());
app.use('/auth',UserRouter)
dotenv.config({path: './environment-variables/secret.env'});
mongoose.connect(process.env.MONGODB_URI)

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
});