export class Player{
    constructor(name, map){
        this.name = name;
        this.map = map;
        this.shipIndexes = [];
        this.turn = false;
    }
    
    setPlayerTurn(){
        this.turn = !this.turn;
    }

    setShipIndexes(shipIndexes){
        this.shipIndexes.push(shipIndexes);
    }
}