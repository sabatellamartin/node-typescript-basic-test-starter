import Server from "./server";
import { Request, Response } from 'express';
import { hey } from './helper';

//import dotenv from 'dotenv';
//dotenv.config();

const server = Server.init(5000);

server.app.get("/hello", (req: Request, res: Response): void => {
    res.json({ message: hey });
});

server.start(() => {
    console.log("Server Running at 5000 port");
});