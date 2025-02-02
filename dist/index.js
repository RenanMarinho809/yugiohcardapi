"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const rotas_1 = __importDefault(require("./routes/rotas"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT;
app.use(rotas_1.default);
app.get('/', (req, res) => {
    res.send('Yugi-oh Card API');
});
app.listen(port, () => {
    console.log(`🔥Server is running on port ${port}`);
});
