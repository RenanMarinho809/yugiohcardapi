import { Router } from "express";
import getCardList from "../controllers/getCardList";
import getMonsterByID from "../controllers/getMonsterByID";







const rotas = Router();

rotas.get('/cards', getCardList);
rotas.get('/cards/:id', getMonsterByID);

export default rotas;