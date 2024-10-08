interface Game{
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export const games:Game[]=[];

export class GameManager{
    private games:Game[]=[];
    constructor(){
        this.games=[];
    }
    addMove(gameId:string,move:string){
        console.log("Adding move to game", gameId, move);
        const game=this.games.find(game=>game.id===gameId);
        game?.moves.push(move);
    }

    public addGame(gameId:string,moves:string){
        const game={
            id: Math.random().toString(),
            //add random string
            whitePlayer: Math.random().toString(),
            blackPlayer: Math.random().toString(),
            moves: [],
        }
        this.games.push(game)
    }
    public getGames(){
        const games={
            id: Math.random().toString(),
            //add random string
            whitePlayer: Math.random().toString(),
            blackPlayer: Math.random().toString(),
            moves: [],
        }
        return this.games;
    }
}
//Left at 1:15:00

