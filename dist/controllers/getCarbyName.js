"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_monsterduel_1 = __importDefault(require("../cards/card-monsterduel"));
const getMonsterByName = (req, res) => {
    const name = req.params.name;
    const monsterDuelByName = card_monsterduel_1.default.find((card) => card.card_name.toLowerCase() === name.toLowerCase());
    if (!monsterDuelByName)
        res.status(404 /* HttpStatuscode.NotFound */).json({ message: 'Card not found' });
    else
        res.status(200 /* HttpStatuscode.OK */).json(monsterDuelByName);
};
exports.default = getMonsterByName;
