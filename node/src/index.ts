import Server from "./server";
import { Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();

import { hey } from './helper';

const port: number = Number(String(process.env.PORT)) || 3000; 
const server = Server.init(port);

server.app.get('/hello', (req: Request, res: Response): void => {
    res.json({ message: hey });
});

server.views('views');

server.start(() => {
    console.log(`Server Running here 👉   http://localhost:${port}`);
});