"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_monsterduel_1 = __importDefault(require("../cards/card-monsterduel"));
//List all cards
const getCardList = (req, res) => {
    res.json(card_monsterduel_1.default).status(200 /* HttpStatuscode.OK */);
};
exports.default = getCardList;
