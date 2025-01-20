import { Request, Response } from "express";
import monsterDuel from "../cards/card-monsterduel";


export const getCardById = (req: Request, res: Response) => {

    const { id } = req.params;
    const card = monsterDuel.find((card) => card.card_id === parseInt(id));

    if (card)res.status(200).json(card);    
    else
    res.status(404).json({message: 'Card not found!'});
    
}