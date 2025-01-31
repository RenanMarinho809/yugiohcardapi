import { Request, Response } from 'express';
import monsterDuel from '../cards/card-monsterduel';
import { HttpStatuscode } from '../utils/http-server';


const getMonsterByID = (req: Request, res: Response) => {
    const id = req.params.id;
    const monsterDuelByID = monsterDuel.find((card) => card.card_id === Number(id));
    
    if (!monsterDuelByID) 
     res.status(HttpStatuscode.NotFound).json({ message: 'Card not found' });
        else
     res.status(HttpStatuscode.OK).json(monsterDuelByID);
    
}

export default getMonsterByID;