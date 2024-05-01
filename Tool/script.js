document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');
    var audioElements = document.querySelectorAll('audio');
    var currentAudio = null;
    var currentAudioIndex = 0;
    var googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeLjnsMw76THOCROABUmGsIzsC4ekN-WFEAIOQsd_pty_6gcA/viewform?usp=sf_link";

    
    function createCircle(event) {
        var circles = document.querySelectorAll('.red-circle');
        
        
        circles.forEach(function(circle) {
            container.removeChild(circle);
        });

        var circle = document.createElement('div');
        circle.classList.add('red-circle');
        circle.style.left = (event.pageX - 15) + 'px'; 
        circle.style.top = (event.pageY - 15) + 'px';
        container.appendChild(circle);
        circle.addEventListener('click', function() {
            container.removeChild(circle);
        });

        
        if (currentAudio !== null) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        
        currentAudio = audioElements[currentAudioIndex];
        currentAudio.play();
        currentAudioIndex = (currentAudioIndex + 1) % audioElements.length;
    }

    
    container.addEventListener('mousedown', function(event) {
        if (event.detail === 2) { 
            window.open(googleFormLink, '_blank'); 
        } else {
            createCircle(event);
        }
    });

    container.addEventListener('touchstart', function(event) {
        if (event.touches.length === 1) { 
            createCircle(event.touches[0]); 
        } else if (event.touches.length === 2) { 
            window.open(googleFormLink, '_blank'); 
        }
        event.preventDefault(); 
    });
});
