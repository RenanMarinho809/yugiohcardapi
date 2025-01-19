import { Request, Response } from "express";
import monsterDuel from "../cards/card-monsterduel";


//Function to list all cards
export const listAllCards = (req: Request, res: Response) => {
    res.status(200).json(monsterDuel);
}