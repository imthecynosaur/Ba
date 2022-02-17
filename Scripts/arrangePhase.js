import { Map } from './map.js';


// const arrangePhase = document.querySelector('template')
const arrangePhase = document.importNode(document.querySelector('template').content, true);
console.log(arrangePhase);
const body = document.querySelector('body');
body.prepend(arrangePhase);

const mapElement = document.querySelectorAll('.map');
// console.log(MapElement);
mapElement.forEach(map => {
    new Map(map);
})
// const map = new Map(mapElement);

