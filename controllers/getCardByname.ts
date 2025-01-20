import { Request, Response } from "express";
import monsterDuel from "../cards/card-monsterduel";
import { HttpStatuscode } from "../utils/http-server";


export const getCardByname = (req: Request, res: Response) => {
    const { name } = req.params;
    const card = monsterDuel.find((card) => card.card_name === name);

    if (card)res.status(HttpStatuscode.OK).json(card);
       else
       res.status(HttpStatuscode.NOT_FOUND).json({message: 'Card not found!'});
}