import express, { Request, Response } from 'express';
import monsterDuel from '../cards/card-monsterduel';
import { HttpStatuscode } from '../utils/http-server';


//List all cards
const getCardList = (req: Request, res: Response) => {
    res.json(monsterDuel).status(HttpStatuscode.OK);
}

export default getCardList;