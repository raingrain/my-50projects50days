const button = document.querySelector('.ripple');

button.addEventListener('click', event => {
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.left = xInside + 'px'
    circle.style.top = `${yInside}px`;

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
})