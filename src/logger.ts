import { games } from "./store";

export const Logger =()=>{
    setInterval(()=>{
        //log the games array every 5 seconds
        console.log(games);
    },5000)
}