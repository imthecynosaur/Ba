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