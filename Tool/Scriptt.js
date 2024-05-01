document.addEventListener('DOMContentLoaded', function() {
    
    const audioFiles = ['audio/sound1.mp3', 'audio/sound2.mp3', 'audio/sound3.mp3', 'audio/sound4.mp3', 'audio/sound5.mp3', 'audio/sound6.mp3', 'audio/sound7.mp3',];

    
    const audio = new Audio();

    
    let currentIndex = 0;

    document.addEventListener('keydown', function(event) {
        
        audio.pause();

        
        const color = '#0096ff';

       
        const posX = Math.floor(Math.random() * (window.innerWidth - 200)); 
        const posY = Math.floor(Math.random() * (window.innerHeight - 200)); 

        
        const circle = document.getElementById('circle');
        circle.style.backgroundColor = color;
        circle.style.left = posX + 'px';
        circle.style.top = posY + 'px';

        
        const nextAudio = audioFiles[currentIndex];

        
        audio.src = nextAudio;

        
        currentIndex = (currentIndex + 1) % audioFiles.length;

        
        audio.play();
    });
});
