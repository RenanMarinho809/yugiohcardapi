"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardByname = void 0;
const card_monsterduel_1 = __importDefault(require("../cards/card-monsterduel"));
const getCardByname = (req, res) => {
    const { name } = req.params;
    const card = card_monsterduel_1.default.find((card) => card.card_name === name);
    if (card)
        res.status(200 /* HttpStatuscode.OK */).json(card);
    else
        res.status(404 /* HttpStatuscode.NOT_FOUND */).json({ message: 'Card not found!' });
};
exports.getCardByname = getCardByname;
