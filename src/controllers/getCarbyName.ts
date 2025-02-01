import express, { Request, Response } from 'express';
import monsterDuel from '../cards/card-monsterduel';
import { HttpStatuscode } from '../utils/http-server';


const getMonsterByName = (req: Request, res: Response) => {
    const name = req.params.name;
    const monsterDuelByName = monsterDuel.find((card) => card.card_name.toLowerCase() === name.toLowerCase());

    if (!monsterDuelByName) 
         res.status(HttpStatuscode.NotFound).json({ message: 'Card not found' });
    else
         res.status(HttpStatuscode.OK).json(monsterDuelByName);
} 

export default getMonsterByName;