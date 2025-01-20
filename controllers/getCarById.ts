import { Request, Response } from "express";
import monsterDuel from "../cards/card-monsterduel";
import { HttpStatuscode } from "../utils/http-server";


export const getCardById = (req: Request, res: Response) => {

    const { id } = req.params;
    const card = monsterDuel.find((card) => card.card_id === parseInt(id));

    if (card)res.status(HttpStatuscode.OK).json(card);    
    else
    res.status(HttpStatuscode.NOT_FOUND).json({message: 'Card not found!'});
    
}