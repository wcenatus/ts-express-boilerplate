import { Request,Response } from "express";

export const getUsers = (req:Request,res:Response) =>{
    const users = [
        {id:1,name:'user1'},
        {id:2,name:'user2'},
        {id:3,name:'user3'},
        {id:4,name:'user4'}
    ];
    res.json(users);
};
