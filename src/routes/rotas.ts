import { Router } from "express";
import getCardList from "../controllers/getCardList";


const rotas = Router();

rotas.get('/cards', getCardList);

export default rotas;