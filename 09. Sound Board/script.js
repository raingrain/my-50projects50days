const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// 暂停当前的所有声音并将进度调回0
function stopSongs () {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs();
        // 播放当前选中按钮的音乐
        document.getElementById(sound).play();
    })
    // 加上按钮
    document.getElementById('buttons').appendChild(btn);
})
