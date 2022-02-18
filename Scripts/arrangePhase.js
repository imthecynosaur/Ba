import { Map } from './map.js';

const arrangePhase = document.importNode(document.querySelector('template').content, true);
const body = document.querySelector('body');
body.prepend(arrangePhase);

const mapElement = document.querySelector('.map');
const map = new Map(mapElement);


const shipElements = document.querySelectorAll('.shipp');
shipElements.forEach(shipElement => {
    shipElement.addEventListener('dragstart', () => {
        map.setCurrentShip(shipElement);
    });

    shipElement.addEventListener('dblclick', (event) => {
        console.log('db clicked');
        event.target.classList.toggle('horizontal');
    })
})