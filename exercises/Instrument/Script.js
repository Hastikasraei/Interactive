document.addEventListener('DOMContentLoaded', function() {
    const audioFiles = ['audios/audio1.mp3', 'audios/audio2.mp3', 'audios/audio3.mp3', 'audios/audio4.mp3', 'audios/audio5.mp3', 'audios/audio6.mp3', 'audios/audio7.mp3', 'audios/audio8.mp3', 'audios/audio9.mp3', 'audios/audio10.mp3',];
    const audio = new Audio();
    let currentIndex = 0;

    function playAudio() {
        audio.pause();
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const posX = Math.floor(Math.random() * (window.innerWidth - 200)); 
        const posY = Math.floor(Math.random() * (window.innerHeight - 200)); 
        const color = `rgb(${red},${green},${blue})`;
        const circle = document.getElementById('circle');
        circle.style.backgroundColor = color;
        circle.style.left = posX + 'px';
        circle.style.top = posY + 'px';
        const nextAudio = audioFiles[currentIndex];
        audio.src = nextAudio;
        currentIndex = (currentIndex + 1) % audioFiles.length;
        audio.play();
    }

    document.addEventListener('keydown', playAudio);
    document.addEventListener('touchstart', playAudio);
});