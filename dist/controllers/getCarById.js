"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardById = void 0;
const card_monsterduel_1 = __importDefault(require("../cards/card-monsterduel"));
const getCardById = (req, res) => {
    const { id } = req.params;
    const card = card_monsterduel_1.default.find((card) => card.card_id === parseInt(id));
    if (card)
        res.status(200 /* HttpStatuscode.OK */).json(card);
    else
        res.status(404 /* HttpStatuscode.NOT_FOUND */).json({ message: 'Card not found!' });
};
exports.getCardById = getCardById;
