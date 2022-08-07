function checkBoxes () {
    const boxes = document.querySelectorAll('.box');
    // 盒子不左右平移的范围，window.innerHeight指窗口高度
    const triggerBottom = window.innerHeight / 10 * 9;
    const triggerTop = window.innerHeight / 10 * 2;
    boxes.forEach(box => {
        // 盒子的顶部和底部距页面顶的距离
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;
        // 头进来和尾出去时盒子开始左右平移
        if (boxTop < triggerBottom && boxBottom > triggerTop) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

window.addEventListener('scroll', checkBoxes);

checkBoxes();

