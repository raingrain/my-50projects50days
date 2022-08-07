document.querySelectorAll('.form-control label').forEach(label => {
    label.innerHTML = label.innerText.split('').map((char, index) => {
        return `<span style="transition-delay: ${index * 50}ms">${char}</span>`
    }).join('');
});

