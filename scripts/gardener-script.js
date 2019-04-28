function openLinkFromNavigationBar() {
    window.open("home.html","_self");
}

var imageSlideIndex = 1;

showSlides(imageSlideIndex);

function plusSlides(x) {
    showSlides(imageSlideIndex += x);
}

function selectCurrentSlide(x) {
    showSlides(imageSlideIndex = x);
}

function showSlides(x) {
    var i;
    var slides = document.getElementsByClassName("imageSlides");
    var dots = document.getElementsByClassName("select-dot");

    if (x > slides.length) {
        imageSlideIndex = 1;
    }

    if (x < 1) {
        imageSlideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[imageSlideIndex - 1].style.display = "block";
    dots[imageSlideIndex - 1].className += " active";
}
