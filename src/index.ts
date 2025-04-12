import express from 'express';
import { Request,Response } from "express";
import users from './routes/users';

var app = express();
const PORT = 3000;

app.use('/users',users);

app.get('/',(req:Request, res:Response)=>{
    res.json({message:"Success"});
});

app.listen(PORT,()=>console.log(`App started on PORT: ${PORT}`));