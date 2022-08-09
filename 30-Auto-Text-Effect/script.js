const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = '谷雨生白谷，你好呀！';
let index = 1;
let speed = 300 / speedEl.value;

function whiteText () {
    textEl.innerText = text.slice(0, index++);
    if (index > text.length) {
        index = 1;
    }
}

let id = setInterval(() => {
    whiteText()
}, speed);

speedEl.addEventListener('input', event => {
    clearInterval(id);
    id = setInterval(() => whiteText(), 300 / event.target.value);
});