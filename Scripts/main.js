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
            gridEl.classList.add('ship-start');
            gridEl.nextSibling.classList.add('ship-end');
        } else if (event.dataTransfer.getData('text/plain') == '4') {
            gridEl.classList.add('ship');
            gridEl.previousSibling.classList.add('ship');
            gridEl.previousSibling.previousSibling.classList.add('ship-start');
            gridEl.nextSibling.classList.add('ship-end'); 
        } else {
            gridEl.classList.add('ship');
            gridEl.previousSibling.classList.add('ship-start');
            gridEl.nextSibling.classList.add('ship-end');
        }

        ship.style.display = 'none';
        console.log(event.dataTransfer.getData('text/plain'));
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

