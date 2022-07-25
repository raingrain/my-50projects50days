// 通过document.querySelectorAll()获取五个盒子的dom节点数组
const panels = document.querySelectorAll('.panel');

// 给数组的每一个元素也就是每一个盒子绑定一个点击事件
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // 点击事件触发时先移除所有盒子的active类
        removeClassActive();
        // 再将active类添加到点击的盒子上
        panel.classList.add('active');
    });
});

// 把div中的样式类active清空
function removeClassActive () {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
