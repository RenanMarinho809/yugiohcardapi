import  { Request, Response } from 'express';
import { HttpStatuscode } from '../src/utils/http-server';
import getMonsterbyname from '../src/controllers/getCarbyName';
import monsterDuel from '../src/cards/card-monsterduel';


it('Get card by name', () => {
    const req = {} as Request;
    const res = {} as Response;

    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    req.params = { name: 'Blue-Eyes White Dragon' };
    getMonsterbyname(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatuscode.OK);
    expect(res.json).toHaveBeenNthCalledWith(1, monsterDuel[0]);
})