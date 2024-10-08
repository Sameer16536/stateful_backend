import { Logger } from "./logger";
import { games } from "./store";

Logger()
setInterval(() => {
    games.push({
        id: Math.random().toString(),
        //add random string
        whitePlayer: Math.random().toString(),
        blackPlayer: Math.random().toString(),
        moves: [],
    })
}, 5000)
