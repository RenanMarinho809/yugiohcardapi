import express, { Request, Response } from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT

app.get('/', (req:Request, res:Response) => {
     res.send('Yugi-oh Card API');
});

app.listen(port, () => {
        console.log(`🔥Server is running on port ${port}`);
});