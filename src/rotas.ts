import { Router } from "express";
import { listAllCards } from "../controllers/listallcard";


const rotas = Router();


rotas.get('/cards',listAllCards);




export default rotas