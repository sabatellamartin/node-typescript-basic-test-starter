import Server from "./server";
import { Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();

import { hey } from './helper';

import Message from "./message";
import Person from "./person";

const port: number = Number(String(process.env.PORT)) || 3000; 
const server = Server.init(port);

server.app.get('/person', (req: Request, res: Response): void => {
    const person = new Person("Name", "Last", 35);
    res.json({ message:  person.getFullName() });
});

server.app.get('/typescript', (req: Request, res: Response): void => {
    const message = new Message("");
    message.typescript();
    res.json({ message:  message.message });
});

server.app.get('/hello', (req: Request, res: Response): void => {
    res.json({ message: hey });
});

server.views('views');

server.start(() => {
    console.log(`Server Running here 👉   http://localhost:${port}`);
});