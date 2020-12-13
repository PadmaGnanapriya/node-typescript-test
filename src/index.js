"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Create a new express app instance
var app = express_1.default();
app.get('/', function (req, res) {
    res.send('Node Express TypeScript');
});
app.get('/cominglevel', function (req, res) {
    res.send('Routing test for this');
});
var PORT = 4000;
app.listen(PORT, function () {
    console.log("App is listening on port " + PORT + "!");
});
