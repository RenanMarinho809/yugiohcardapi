"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllCards = void 0;
const card_monsterduel_1 = __importDefault(require("../cards/card-monsterduel"));
const listAllCards = (req, res) => {
    res.status(200 /* HttpStatuscode.OK */).json(card_monsterduel_1.default);
};
exports.listAllCards = listAllCards;
