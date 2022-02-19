import {Ship} from './ship.js';

export class Map {
    constructor(hostElement){
        this.hostElement = hostElement;
        this.ships = [];
        this.createGrid();
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
                this.ships[this.ships.length-1].render(this.hostElement);
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
        if(newShip.setShipPosition(gridId) == false){
            return false;
        }
        for(const ship of this.ships){
            for (const position of ship.position) {
                for (const Position of newShip.position) {
                    if (position == Position){
                        console.log('loaded with shit');
                        return false;
                    }
                }
            }
        }
        this.ships.push(newShip);
        // newShip.render(this.hostElement);
        return true;
    }


}