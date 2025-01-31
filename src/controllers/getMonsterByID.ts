import express, { Request, Response } from 'express';
import monsterDuel from '../cards/card-monsterduel';
import { HttpStatuscode } from '../utils/http-server';


const getMonsterByID = (req: Request, res: Response) => {
    const { id } = req.params;
    const monster = monsterDuel.find((card) => card.card_id === Number(id));
    return res.json(monster).status(HttpStatuscode.OK);
}