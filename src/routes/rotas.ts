import { Router } from "express";
import getCardList from "../controllers/getCardList";
import getMonsterByID from "../controllers/getMonsterByID";
import getMonsterByName from "../controllers/getCarbyName";










const rotas = Router();

rotas.get('/cards', getCardList);
rotas.get('/cards/:id', getMonsterByID);
rotas.get('/cards/name/:name', getMonsterByName)

export default rotas;