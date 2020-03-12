export class GamesService {
    private games = [
        {
        id: 'haunted-showers', 
        name: 'Haunted Showers'
        },
        {
        id:'concord', 
        name: 'Concord'
        },
        {
        id: 'observe-os', 
        name: 'Observe OS'
        }
      ];

    getGames(){
        return this.games;
    }

    getGame(id: string){
        const game = this.games.find(
            (g) => {
                return g.id === id;
            }
        );
        return game;
    }


}