import {Ship} from './ship.js';

export class Map {
    constructor(hostElement){
        this.hostElement = hostElement;
        this.ships = [];
        this.createGrid();
        this.createDropZone();
    }

    createGrid(){
        for(let i=1 ; i<=100; i++){
            const gridElement = document.createElement('grid');
            gridElement.setAttribute('id', `grid-${i}`);
            this.hostElement.appendChild(gridElement);
        }
    }

    createDropZone(){
        this.hostElement.addEventListener('dragover', event => {
            event.preventDefault();
            event.target.classList.add('highlight');
        })

        this.hostElement.addEventListener('dragleave', event => {
            event.preventDefault();
            event.target.classList.remove('highlight');
        })
        
        this.hostElement.addEventListener('drop', event => {
            event.preventDefault();
            event.target.classList.remove('highlight');
            if (this.createShip(this.currentShipId, this.currentShipDirection, this.currentShipLenght, +event.target.id.split("-")[1])){
                this.currentShip.style.display = 'none';
            }
        })
    }
    
    setCurrentShip(ship) {
        this.currentShip = ship;
        this.currentShipId = ship.id;
        this.currentShipDirection = ship.classList.contains('horizontal') ? 'horizontal' : 'vertical';
        this.currentShipLenght = ship.id.split("-")[1] == '1' ? 2 : ship.id.split("-")[1] == '4' ? 4 : 3;
    }

    createShip(shipId, shipDirection, shipLenght, gridId){
        const newShip = new Ship(shipLenght, shipDirection, shipId)
        this.ships.push(newShip);
        if(newShip.setShipPosition(gridId) == false){
            this.ships.pop();
            return false;
        }
        for(const ship of this.ships){
            if(ship.id != newShip.id){
                for (const position of ship.position) {
                    for (const Position of newShip.position) {
                        if (position == Position){
                            console.log('shit');
                            this.ships.pop();
                            return false;
                        }
                    }
                }
            }
        }
        newShip.render(this.hostElement);
        return true;
    }

    
}