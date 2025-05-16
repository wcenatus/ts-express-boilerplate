import express from "express";
import { Request, Response } from "express";
import users from "./routes/users";
import errorMiddleware from "./middlewares/errorMiddleware";

var app = express();
const PORT = 3000;

app.use("/users", users);
app.use(errorMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Success" });
});

app.listen(PORT, () =>
  console.log(`App started on PORT: http://localhost:${PORT}`)
);
