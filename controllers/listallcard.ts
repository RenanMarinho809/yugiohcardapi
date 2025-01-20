import { Request, Response } from "express";
import monsterDuel from "../cards/card-monsterduel";



export const listAllCards = (req: Request, res: Response) => {
    res.status(200).json(monsterDuel);
}