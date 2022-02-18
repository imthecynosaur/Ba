export class Ship {
    constructor(lenght, direction, id){
        this.lenght = lenght;
        this.direction = direction;
        this.id = id;
        this.position = [];
    }

    setShipPosition(gridId) {
        if (this.direction === 'vertical') {
            if (gridId + (this.lenght-1) * 10 <= 100){
                for (let i=0; i<this.lenght; i++){
                    this.position.push(gridId + (i * 10));
                }
            } else {
                console.log('doesnt fit vertically.');
                return false;
            }
        } else {
            if (gridId % 10 != 0 && ((gridId + this.lenght - 1) % 10 == 0 || Math.floor(gridId / 10) == Math.floor((gridId + this.lenght - 1) / 10))){
                for (let i=0; i<this.lenght; i++) {
                    this.position.push(gridId + i);
                }
            } else {
                console.log('bottom of the row');
                return false;
            }
        }
    }

    render(hostElement){
        this.position.forEach(position => {
            switch(position) {
                case this.position[0]:
                    hostElement.querySelector(`#grid-${position}`).classList.add(`ship-start-${this.direction}`);
                    break;

                case this.position[this.position.length-1]:
                    hostElement.querySelector(`#grid-${position}`).classList.add(`ship-end-${this.direction}`);
                    break;
                
                default:
                    hostElement.querySelector(`#grid-${position}`).classList.add(`ship-${this.direction}`);
                    break;
            }    
        })
    }


}