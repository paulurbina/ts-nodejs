"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//Initializations
var app = express_1.default();
//Setings
app.set('port', process.env.PORT || 4000);
//Middlewares
//Routes
//Static files
//Starting the server
app.listen(app.get('port'), function () {
    console.log('server on port', app.get('port'));
});
