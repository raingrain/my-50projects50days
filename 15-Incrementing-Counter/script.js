document.querySelectorAll('.counter').forEach(counter => {
    // counter.innerText = '0'
    let id = setInterval(() => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // setTimeout(updateCounter, 1)
        } else {
            clearInterval(id);
            counter.innerText = target
        }
    }, 1);
});