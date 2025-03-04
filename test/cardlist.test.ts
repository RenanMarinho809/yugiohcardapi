import  { Request, Response } from 'express';
import getCardlist from '../src/controllers/getCardList';
import { HttpStatuscode } from '../src/utils/http-server';
import monsterDuel from '../src/cards/card-monsterduel';


it('List all cards', () => {
    const req = {} as Request;
    const res = {} as Response;

    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    
    getCardlist(req, res);
    expect(res.status).toHaveBeenCalledWith(HttpStatuscode.OK)
    expect(res.json).toHaveBeenNthCalledWith(1, monsterDuel);
});