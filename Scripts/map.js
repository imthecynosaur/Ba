export class Map {
    constructor(hostElement){
        this.hostElement = hostElement;
        this.gridArray = [];
        this.createGrid();
    }

    createGrid(){
        for(let i=1 ; i<=100; i++){
            const gridElement = document.createElement('grid');
            gridElement.setAttribute('id', `grid-${i}`);
            this.hostElement.appendChild(gridElement);
        }
    }

    renderShip(){
    }


}