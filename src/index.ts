import express from 'express';
import dotenv from 'dotenv';
import rotas from './rotas';


const app = express();
app.use(express.json());

app.use(rotas);

dotenv.config();

app.get('/', (req, res) => {
       res.send('Yugioh Card API');
});

const port = process.env.PORT

app.listen(port, () => console.log(`🔥Server runing on port ${port}`));