"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const store_1 = require("./store");
const Logger = () => {
    setInterval(() => {
        //log the games array every 5 seconds
        console.log(store_1.games);
    }, 5000);
};
exports.Logger = Logger;
