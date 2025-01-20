"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const rotas_1 = __importDefault(require("./rotas"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(rotas_1.default);
dotenv_1.default.config();
app.get('/', (req, res) => {
    res.send('Yugioh Card API');
});
const port = process.env.PORT;
app.listen(port, () => console.log(`🔥Server runing on port ${port}`));
