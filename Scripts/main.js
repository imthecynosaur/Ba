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
    // console.log(element);
    element.addEventListener('click', () => {
       element.classList.toggle('ship'); 
       element.previousSibling.classList.toggle('ship-start');
       element.nextSibling.classList.toggle('ship-end');
    })
})
// console.log(gridElemnts);






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
        const ship = document.querySelector(`#ship-${event.dataTransfer.getData('text/plain')}`)

        if (event.dataTransfer.getData('text/plain') == '1') {
            gridEl.classList.add('ship-start', 'number-1');
            gridEl.nextSibling.classList.add('ship-end', 'number-1');
        } else if (event.dataTransfer.getData('text/plain') == '4') {
            gridEl.classList.add('ship', 'number-4');
            gridEl.previousSibling.classList.add('ship', 'number-4');
            gridEl.previousSibling.previousSibling.classList.add('ship-start', 'number-4');
            gridEl.nextSibling.classList.add('ship-end', 'number-4'); 
        } else if (event.dataTransfer.getData('text/plain') == '3') {
            gridEl.classList.add('ship', 'number-3');
            gridEl.previousSibling.classList.add('ship-start', 'number-3');
            gridEl.nextSibling.classList.add('ship-end', 'number-3');
        } else {
            gridEl.classList.add('ship', 'number-2');
            gridEl.previousSibling.classList.add('ship-start', 'number-2');
            gridEl.nextSibling.classList.add('ship-end', 'number-2');
        }

        ship.style.display = 'none';
        console.log(event.dataTransfer.getData('text/plain'));
    })



    gridEl.addEventListener('click', () => {
        if (gridEl.classList.contains('ship') || gridEl.classList.contains('ship-end') || gridEl.classList.contains('ship-start')){
            const shipNumber = gridEl.classList[1];
            console.log(map);
            const shiplist = map.querySelectorAll(`.${shipNumber}`);
            shiplist.forEach(ship => {
                console.log(ship);
                ship.classList.toggle('ship-highlight');
            })
        }

        const rotateBtn = document.querySelector('#rotate-btn');
        const deleteBtn = document.querySelector('#delete-btn');

        if (map.querySelectorAll('.ship-highlight').length > 0 && map.querySelectorAll('.ship-highlight').length < 5){
            rotateBtn.classList.add('active');
            deleteBtn.classList.add('active');
        } else {
            rotateBtn.classList.remove('active');
            deleteBtn.classList.remove('active');
        }
    })


    map.append(gridEl);
}



const ships = document.querySelectorAll('.shipp');
ships.forEach(ship => {
    ship.addEventListener('dragstart', event => {
        if (ship.id == 'ship-1') {
            event.dataTransfer.setData('text/plain', '1');
        } else if (ship.id == 'ship-2') {
            event.dataTransfer.setData('text/plain', '2');
        } else if (ship.id == 'ship-3') {
            event.dataTransfer.setData('text/plain', '3');
        } else {
            event.dataTransfer.setData('text/plain', '4');
        }

        
    })
})

