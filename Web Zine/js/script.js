// =============== menu ================

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}




function myFunction2() {
    var x = document.getElementById("myLinks2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}







// https: //github.com/GeorgeHastings/emblem

var Emblem = {
    init: function(el, str) {
        var element = document.querySelector(el);
        var text = str ? str : element.innerHTML;
        element.innerHTML = '';
        for (var i = 0; i < text.length; i++) {
            var letter = text[i];
            var a = document.createElement('a');
            a.href = "https://www.imdb.com/list/ls540174474/"
            var node = document.createTextNode(letter);
            var r = (360 / text.length) * (i);
            var x = (Math.PI / text.length).toFixed(0) * (i);
            var y = (Math.PI / text.length).toFixed(0) * (i);
            a.appendChild(node);
            a.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
            a.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
            element.appendChild(a);
        }
    }
};

Emblem.init('.emblem');




// ====================================

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}