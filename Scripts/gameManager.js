import { Map } from './map.js';
import { Player } from './player.js';
import { ArrangePhase } from './arrangePhase.js';

const playerMapElement = document.getElementById('screen-1');
const playerMap = new Map(playerMapElement);

const player = new Player('Cynosaur', playerMap);

setTimeout(() => {
    playerMap.ships = ArrangePhase.getMap().ships;
    playerMap.ships.forEach(ship => {
            ship.render(playerMapElement);
            ship.position.forEach(position => {
                player.setShipIndexes(position);
            })
        })
    console.log(player);
}, 10000);

const computerMapElement = document.getElementById('screen-2');
const computerMap = new Map(computerMapElement);
while (computerMap.ships.length < 4){
    const shipDirection = Math.floor((Math.random() * 10)) % 2 == 0 ? 'vertical' : 'horizontal';
    let gridId = Math.floor((Math.random() * 100) + 1);
    let shipLenght = null;
    switch (computerMap.ships.length) {
        case 0:
            shipLenght = 2;
            break;
        case 1:
        case 2:
            shipLenght = 3;
            break;
        case 3:
            shipLenght = 4;
            break;
    }
    computerMap.createShip(null, shipDirection, shipLenght, gridId);
}

console.log(computerMap.ships);