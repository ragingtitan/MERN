import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/allnames',(req,res)=>{
    res.send();
});

export {router as userApiRouter};
