import { Router } from "express";
import { listAllCards } from "../controllers/listallcard";
import { getCardById } from "../controllers/getCarById";
import { getCardByname } from "../controllers/getCardByname";









const rotas = Router();


rotas.get('/cards',listAllCards);
rotas.get('/cards/:id',getCardById);
rotas.get('/cards/name/:name',getCardByname);



export default rotas; 