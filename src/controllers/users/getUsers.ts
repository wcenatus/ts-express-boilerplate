import { Request, Response, NextFunction } from "express";

export const getUsers = (req: Request, res: Response) => {
  const users = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
    { id: 4, name: "user4" },
  ];
  res.json(users);
};

//Universal error handling example
// export const getUsers = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     throw new Error("Random error");
//   } catch (error) {
//     next(error);
//   }
// };
