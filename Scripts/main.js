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
        if (element.classList.length >= 3) {
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



const rotateFunc = function() {
    console.log('rotated');
}

const deleteFunc = function() {
    console.log('deleted');
    
    const shipOnMap = map.querySelectorAll('.ship-highlight');
    const shipId = shipOnMap[0].classList[1];
    document.querySelector(`#${shipId}`).style.display = 'block';
    shipOnMap.forEach(ship => {
        ship.removeAttribute('class');
    })

    rotateBtn.classList.remove('active');
    deleteBtn.classList.remove('active');
}




const rotateBtn = document.querySelector('#rotate-btn');
const deleteBtn = document.querySelector('#delete-btn');


const map = document.querySelector('.map');

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


        // if (event.dataTransfer.getData('text/plain') == '1') {
        //     gridEl.classList.add('ship-start', 'number-1');
        //     gridEl.nextSibling.classList.add('ship-end', 'number-1');
        // } else if (event.dataTransfer.getData('text/plain') == '4') {
        //     gridEl.classList.add('ship', 'number-4');
        //     gridEl.previousSibling.classList.add('ship', 'number-4');
        //     gridEl.previousSibling.previousSibling.classList.add('ship-start', 'number-4');
        //     gridEl.nextSibling.classList.add('ship-end', 'number-4'); 
        // } else if (event.dataTransfer.getData('text/plain') == '3') {
        //     gridEl.classList.add('ship', 'number-3');
        //     gridEl.previousSibling.classList.add('ship-start', 'number-3');
        //     gridEl.nextSibling.classList.add('ship-end', 'number-3');
        // } else {
        //     gridEl.classList.add('ship', 'number-2');
        //     gridEl.previousSibling.classList.add('ship-start', 'number-2');
        //     gridEl.nextSibling.classList.add('ship-end', 'number-2');
        // }


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
            rotateBtn.classList.add('active');
            deleteBtn.classList.add('active');

            rotateBtn.addEventListener('click', rotateFunc)
            deleteBtn.addEventListener('click', deleteFunc)
        } else {
            rotateBtn.classList.remove('active');
            deleteBtn.classList.remove('active');

            rotateBtn.removeEventListener('click', rotateFunc);
            deleteBtn.removeEventListener('click', deleteFunc);
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

