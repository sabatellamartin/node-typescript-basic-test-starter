import express, { Request, Response } from 'express';
const app = express();

import { hey } from './helper';

app.get("/hello", (req: Request, res: Response): void => {
    res.json({ message: hey });
});

app.listen(5000, (): void => {
    console.log("Server Running");
});
