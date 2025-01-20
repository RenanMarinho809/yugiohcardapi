import { Router } from "express";
import { listAllCards } from "../controllers/listallcard";
import { getCardById } from "../controllers/getCarById";









const rotas = Router();


rotas.get('/cards',listAllCards);
rotas.get('/cards/:id',getCardById);




export default rotas; 