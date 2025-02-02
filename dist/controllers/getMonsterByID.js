"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_monsterduel_1 = __importDefault(require("../cards/card-monsterduel"));
const getMonsterByID = (req, res) => {
    const id = req.params.id;
    const monsterDuelByID = card_monsterduel_1.default.find((card) => card.card_id === Number(id));
    if (!monsterDuelByID)
        res.status(404 /* HttpStatuscode.NotFound */).json({ message: 'Card not found' });
    else
        res.status(200 /* HttpStatuscode.OK */).json(monsterDuelByID);
};
exports.default = getMonsterByID;
