"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getCardList_1 = __importDefault(require("../controllers/getCardList"));
const getMonsterByID_1 = __importDefault(require("../controllers/getMonsterByID"));
const getCarbyName_1 = __importDefault(require("../controllers/getCarbyName"));
const rotas = (0, express_1.Router)();
rotas.get('/cards', getCardList_1.default);
rotas.get('/cards/:id', getMonsterByID_1.default);
rotas.get('/cards/name/:name', getCarbyName_1.default);
exports.default = rotas;
