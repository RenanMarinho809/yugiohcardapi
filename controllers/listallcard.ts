import { Request, Response } from "express";
import monsterDuel from "../cards/card-monsterduel";
import { HttpStatuscode } from "../utils/http-server";



export const listAllCards = (req: Request, res: Response) => {
    res.status(HttpStatuscode.OK).json(monsterDuel);
}