import  { Request, Response } from 'express';
import getmonsTerByID from '../src/controllers/getMonsterByID';
import { HttpStatuscode } from '../src/utils/http-server';
import monsterDuel from '../src/cards/card-monsterduel';


it('Get card by ID', () => {
    const req = {} as Request;
    const res = {} as Response;

    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);

    req.params = { id: '1' };
    getmonsTerByID(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatuscode.OK);
    expect(res.json).toHaveBeenNthCalledWith(1, monsterDuel[0]);
});