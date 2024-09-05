import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { User } from './routes';
import cors from "cors"
import { Db } from './db';
Db()


dotenv.config();


const app = express();
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "*"
}))
const route = express.Router();
app.use('/', route);
app.use('/user', User);
route.get('/', (req: Request, res: Response) => {
    res.send("lol");
});


app.listen(process.env.PORT, () => {
    console.log(`App listening on ${process.env.PORT}`);
});