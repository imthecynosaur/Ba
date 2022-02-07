const screen1 = document.querySelector('.screen-1');
const screen2 = document.querySelector('.screen-2');

for (let i = 1; i <= 100; i++) {
    const gridEl = document.createElement('a');
    gridEl.setAttribute('id', `grid-${i}`);
    gridEl.addEventListener('click', () => {
        console.log(gridEl);
    })
    screen1.append(gridEl);
}

for (let i = 1; i <= 100; i++) {
    const gridEl = document.createElement('a');
    gridEl.setAttribute('id', `grid-${i}`);
    screen2.append(gridEl);
}