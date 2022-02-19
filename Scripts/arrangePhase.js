import { Map } from './map.js';

export class ArrangePhase {
    static setMap(map) {
        this.map = map;
    }
    static getMap() {
        return this.map;
    }
}


const arrangePhase = document.importNode(document.querySelector('template').content, true);
const body = document.querySelector('body');
body.prepend(arrangePhase);

const mapElement = document.querySelector('.map');
const map = new Map(mapElement);
map.createDropZone();

const shipElements = document.querySelectorAll('.shipp');
shipElements.forEach(shipElement => {
    shipElement.addEventListener('dragstart', () => {
        map.setCurrentShip(shipElement);
    });

    shipElement.addEventListener('dblclick', (event) => {
        event.target.classList.toggle('horizontal');
    })
})


const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', () => {
    body.removeChild(document.querySelector('.arrange-phase'));
    ArrangePhase.setMap(map);
})

const timerElement = document.getElementById('timer');
let timerNumber = 9;
const timer = setInterval(() => {
    timerElement.innerHTML = `${timerNumber}`;
    if (timerNumber == 0){
        clearInterval(timer);
    }
    timerNumber--;
}, 1000)
