"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.Logger)();
setInterval(() => {
    store_1.games.push({
        id: Math.random().toString(),
        //add random string
        whitePlayer: Math.random().toString(),
        blackPlayer: Math.random().toString(),
        moves: [],
    });
}, 5000);
