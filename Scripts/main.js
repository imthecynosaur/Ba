const screen1 = document.querySelector('.screen-1');
const screen2 = document.querySelector('.screen-2');



for (let i = 1; i <= 100; i++) {
    const gridEl = document.createElement('a');
    gridEl.setAttribute('id', `grid-${i}`);
    // gridEl.addEventListener('click', () => {
    //     const hitEl = document.createElement('div');
    //     hitEl.classList.add('ship');
    //     gridEl.appendChild(hitEl);
    // })
    screen1.append(gridEl);
}

for (let i = 1; i <= 100; i++) {
    const gridEl = document.createElement('a');
    gridEl.setAttribute('id', `grid-${i}`);
    screen2.append(gridEl);
}

const gridElemnts = document.querySelectorAll('.screen-1 a');
gridElemnts.forEach((element) => {
    element.addEventListener('click', () => {
       element.classList.toggle('ship'); 
       element.previousSibling.classList.toggle('ship-start');
       element.nextSibling.classList.toggle('ship-end');
    })
})










/*---------------------------------DRAW-FUNCTION--------------------------------------*/

const drawFunc = function(gridId, shipID) {
    const regex = /\d+/;
    const gridNumber = parseInt(gridId.match(regex));
    const ship = document.querySelector(`#${shipID}`);

    const elements = map.querySelectorAll('a');

    switch (shipID) {
        case 'number-1':
            if (gridNumber <= 90) {
                document.querySelector(`#grid-${gridNumber}`).classList.add('ship-start-vertical', 'number-1');
                document.querySelector(`#grid-${gridNumber+10}`).classList.add('ship-end-vertical', 'number-1');
                ship.style.display = 'none';
            }
            break;

        case 'number-2':
            if (gridNumber <= 80) {
            document.querySelector(`#grid-${gridNumber}`).classList.add('ship-start-vertical', 'number-2');
            document.querySelector(`#grid-${gridNumber+10}`).classList.add('ship-vertical', 'number-2');
            document.querySelector(`#grid-${gridNumber+20}`).classList.add('ship-end-vertical', 'number-2');
            ship.style.display = 'none';
            }
            break;

        case 'number-3':
            if (gridNumber <= 80) {
                document.querySelector(`#grid-${gridNumber}`).classList.add('ship-start-vertical', 'number-3');
                document.querySelector(`#grid-${gridNumber+10}`).classList.add('ship-vertical', 'number-3');
                document.querySelector(`#grid-${gridNumber+20}`).classList.add('ship-end-vertical', 'number-3');
                ship.style.display = 'none';
            }
            break;
            
        case 'number-4':
            if (gridNumber <= 70) {
                document.querySelector(`#grid-${gridNumber}`).classList.add('ship-start-vertical', 'number-4');
                document.querySelector(`#grid-${gridNumber+10}`).classList.add('ship-vertical', 'number-4');
                document.querySelector(`#grid-${gridNumber+20}`).classList.add('ship-vertical', 'number-4');
                document.querySelector(`#grid-${gridNumber+30}`).classList.add('ship-end-vertical', 'number-4');
                ship.style.display = 'none';
            }
            break;
            

        default:
            break;

        
    }
    const shipRegex = /number-/;
    const shittyships = [];

    elements.forEach(element => {
        if (element.classList.length > 3) {
            element.classList.forEach(clas => {
                if (clas.match(shipRegex)){
                    shittyships.push(clas);
                }
            })
        }
    })


    if (shittyships.length > 0) {
        const newShipPosition = map.querySelector(`.${shittyships[1]}`).id;
        shittyships.forEach(shittyship => {
            map.querySelectorAll(`.${shittyship}`).forEach(grid => {
                grid.removeAttribute('class');
            })
        })
        shittyships.forEach(ship => {
            if (ship != shittyships[1]) {
                document.querySelector(`#${ship}`).style.display = 'block';
            }
        })
        drawFunc(newShipPosition, shittyships[1]);
    } 

}

/*-------------------------------DRAW-FUNCTION---------------------------*/



const map = document.querySelector('.map');

const rotateRightBtn = document.querySelector('#rotate-right-btn');
const deleteBtn = document.querySelector('#delete-btn');
const rotateLeftBtn = document.querySelector('#rotate-left-btn');


/*-------------------------------ROTATE-FUNCTION---------------------------*/


const rotateFunc = function(direction, lenght) {


    console.log(this);

    if (direction == 'right') {


        if (this.classList[0].match(/start-vertical/)) {
            if ((parseInt(this.id.match(/\d+/)) % 10 ) >= lenght || (parseInt(this.id.match(/\d+/)) % 10 ) == 0) {
                for (let i=1; i < lenght; i++){
                    if (document.querySelector(`#grid-${parseInt(this.id.match(/\d+/))-i}`).classList.length > 0){
                        console.log('loaded with shit');
                        return;
                    }
                }
                const shipID = this.classList[1];
                map.querySelectorAll(`.${shipID}`).forEach(grid => {
                    grid.removeAttribute('class');
                });

                map.querySelector(`#${this.id}`).classList.add('ship-end', `${shipID}`, 'ship-highlight');
                for (let i=1; i<lenght-1; i++){
                    map.querySelector(`#grid-${(parseInt(this.id.match(/\d+/)) - i)}`).classList.add('ship', `${shipID}`, 'ship-highlight');
                }
                map.querySelector(`#grid-${(parseInt(this.id.match(/\d+/)) - (lenght-1))}`).classList.add('ship-start', `${shipID}`, 'ship-highlight');
            } else {
                console.log("can't be rotated");
                
            }


        }  else if (this.classList[0].match(/end/)){
            if ((parseInt(this.id.match(/\d+/)) >= ((lenght - 1) * 10) )) {
                for (let i=1; i < lenght; i++){
                    if (document.querySelector(`#grid-${parseInt(this.id.match(/\d+/)) - (i * 10)}`).classList.length > 0){
                        console.log('loaded with shit');
                        return;
                    }
                }
                const shipID = this.classList[1];
                map.querySelectorAll(`.${shipID}`).forEach(grid => {
                    grid.removeAttribute('class');
                });

                map.querySelector(`#${this.id}`).classList.add('ship-end-vertical', `${shipID}`, 'ship-highlight');
                for (let i=1; i<lenght-1; i++){
                    map.querySelector(`#grid-${(parseInt(this.id.match(/\d+/)) - (i * 10))}`).classList.add('ship-vertical', `${shipID}`, 'ship-highlight');
                }
                map.querySelector(`#grid-${(parseInt(this.id.match(/\d+/)) - (lenght-1) * 10)}`).classList.add('ship-start-vertical', `${shipID}`, 'ship-highlight');
            } else {
                console.log("can't be rotated");
            }
        } 
    }
    


    
    else {
        if (this.classList[0].match(/end-vertical/)) {
            if ((parseInt(this.id.match(/\d+/)) % 10 ) == 0) {
                console.log('row shit');
            }
             else if (Math.floor(parseInt(this.id.match(/\d+/)) / 10 ) == Math.floor((parseInt(this.id.match(/\d+/)) + lenght - 1) / 10) || (parseInt(this.id.match(/\d+/)) + lenght - 1) % 10 == 0 ) {
                for (let i=1; i < lenght; i++){
                    if (document.querySelector(`#grid-${parseInt(this.id.match(/\d+/))+i}`).classList.length > 0){
                        console.log('loaded with shit');
                        return;
                    }
                }
                const shipID = this.classList[1];
                map.querySelectorAll(`.${shipID}`).forEach(grid => {
                    grid.removeAttribute('class');
                });

                map.querySelector(`#${this.id}`).classList.add('ship-start', `${shipID}`, 'ship-highlight');
                for (let i=1; i<lenght-1; i++){
                    map.querySelector(`#grid-${(parseInt(this.id.match(/\d+/)) + i)}`).classList.add('ship', `${shipID}`, 'ship-highlight');
                }
                map.querySelector(`#grid-${(parseInt(this.id.match(/\d+/)) + (lenght-1))}`).classList.add('ship-end', `${shipID}`, 'ship-highlight');

            } else {
                console.log('border shit');
            }



        } else if (this.classList[0].match(/start/)) {
            if ((parseInt(this.id.match(/\d+/)) + (lenght - 1) * 10) <= 100) {
                for (let i=1; i < lenght; i++){
                    if (document.querySelector(`#grid-${parseInt(this.id.match(/\d+/)) + (i * 10)}`).classList.length > 0){
                        console.log('loaded with shit');
                        return;
                    }
                }
                const shipID = this.classList[1];
                map.querySelectorAll(`.${shipID}`).forEach(grid => {
                    grid.removeAttribute('class');
                });
                map.querySelector(`#${this.id}`).classList.add('ship-start-vertical', `${shipID}`, 'ship-highlight');
                for (let i=1; i<lenght-1; i++){
                    map.querySelector(`#grid-${(parseInt(this.id.match(/\d+/)) + (i * 10))}`).classList.add('ship-vertical', `${shipID}`, 'ship-highlight');
                }
                map.querySelector(`#grid-${(parseInt(this.id.match(/\d+/)) + (lenght-1) * 10)}`).classList.add('ship-end-vertical', `${shipID}`, 'ship-highlight');


            } else {
                console.log("can't be rotated");
            }
        }
    }
}




/*-------------------------------ROTATE-FUNCTION---------------------------*/





const deleteFunc = function() {
    console.log('deleted');
    
    const shipOnMap = map.querySelectorAll('.ship-highlight');
    const shipId = shipOnMap[0].classList[1];
    document.querySelector(`#${shipId}`).style.display = 'block';
    shipOnMap.forEach(ship => {
        ship.removeAttribute('class');
    })

    rotateRightBtn.classList.remove('active');
    deleteBtn.classList.remove('active');
    rotateLeftBtn.classList.remove('active');
}




for (let i = 1; i <= 100; i++) {
    const gridEl = document.createElement('a');
    gridEl.setAttribute('id', `grid-${i}`);

    gridEl.addEventListener('dragover', event => {
        event.preventDefault();
        gridEl.classList.add('highlight');
    })

    gridEl.addEventListener('dragleave', event => {
        event.preventDefault();
        gridEl.classList.remove('highlight');
    })
    
    gridEl.addEventListener('drop', event => {
        event.preventDefault();
        gridEl.classList.remove('highlight');
        
        drawFunc(gridEl.id, event.dataTransfer.getData('text/plain'));
    })



    gridEl.addEventListener('click', () => {
        const shipRegex = /number-/;
        gridEl.classList.forEach(clas => {
            if (clas.match(shipRegex)) {
                const shipID = gridEl.classList[1];
                const shiplist = map.querySelectorAll(`.${shipID}`);
                shiplist.forEach(ship => {
                    ship.classList.toggle('ship-highlight');
                    })
            }
        })

        if (map.querySelectorAll('.ship-highlight').length > 0 && map.querySelectorAll('.ship-highlight').length < 5){
            const rotateRightBtn = document.querySelector('#rotate-right-btn');
            const deleteBtn = document.querySelector('#delete-btn');
            const rotateLeftBtn = document.querySelector('#rotate-left-btn');

            rotateRightBtn.classList.add('active');
            deleteBtn.classList.add('active');
            rotateLeftBtn.classList.add('active');

            rotateRightBtn.addEventListener('click', rotateFunc.bind(map.querySelector('.ship-highlight'), 'right', map.querySelectorAll('.ship-highlight').length));
            deleteBtn.addEventListener('click', deleteFunc);
            rotateLeftBtn.addEventListener('click', rotateFunc.bind(map.querySelectorAll('.ship-highlight')[map.querySelectorAll('.ship-highlight').length-1], 'left', map.querySelectorAll('.ship-highlight').length));
        } else {
            const rotateRightBtn = document.querySelector('#rotate-right-btn');
            const deleteBtn = document.querySelector('#delete-btn');
            const rotateLeftBtn = document.querySelector('#rotate-left-btn');

            rotateRightBtn.classList.remove('active');
            deleteBtn.classList.remove('active');
            rotateLeftBtn.classList.remove('active');

            rotateRightBtn.replaceWith(rotateRightBtn.cloneNode(true));
            deleteBtn.replaceWith(deleteBtn.cloneNode(true));
            rotateLeftBtn.replaceWith(rotateLeftBtn.cloneNode(true));
        }
    })


    map.append(gridEl);
}



const ships = document.querySelectorAll('.shipp');
ships.forEach(ship => {
    ship.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', `${ship.id}`);
    })
})

