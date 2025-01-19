import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.get('/', (req, res) => {
       res.send('Yugioh Card API');
});

const port = process.env.PORT

app.listen(port, () => console.log(`Server is running on port ${port}`));