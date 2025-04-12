import { Request,Response } from "express";

export const getOneUser = (req:Request,res:Response) =>{
    
    const user = {id:1,name:'user1'};
    res.json(user);
};