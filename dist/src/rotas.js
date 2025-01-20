"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listallcard_1 = require("../controllers/listallcard");
const getCarById_1 = require("../controllers/getCarById");
const rotas = (0, express_1.Router)();
rotas.get('/cards', listallcard_1.listAllCards);
rotas.get('/cards/:id', getCarById_1.getCardById);
exports.default = rotas;
