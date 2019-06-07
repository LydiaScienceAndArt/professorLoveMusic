function openLinkFromNavigationBar() {
    window.open("home.html","_self");
}

/*need to wait until elements are loaded and added to DOM*/
document.addEventListener('DOMContentLoaded', (event) => {
    checkMainNaviToggle();
});

function checkMainNaviToggle() {
    let mainNaviToggle = document.getElementById('main-navi-toggle');
    let mainNaviToggleCourses = document.getElementById('main-navi-toggle-courses');
    let sidebarRightSmallDevice = document.getElementById('sidebar-right-small-device');

    if (mainNaviToggle) {
	mainNaviToggle.addEventListener('click', function() {
	    if (sideBarRightSmallDevice.classList.contains('sidebar-right-small-device-off')) {
	        sideBarRightSmallDevice.classList.toggle('sidebar-right-small-device-on');
	    }

	    if (sideBarRightSmallDevice.classList.contains('sidebar-right-small-device-on')) {
                sideBarRightSmallDevice.classList.toggle('sidebar-right-small-device-off');
            }
	});
    }

    if (mainNaviToggleCourses) {
	mainNaviToggleCourses.addEventListener('click', function() {
            if (sideBarRightSmallDevice.classList.contains('sidebar-right-small-device-off')) {
                sideBarRightSmallDevice.classList.toggle('sidebar-right-small-device-on');
            }
           
            if (sideBarRightSmallDevice.classList.contains('sidebar-right-small-device-on')) {
                sideBarRightSmallDevice.classList.toggle('sidebar-right-small-device-off');
            }
	});
    }
}

var imageSlideIndex = 1;

/*need to wait until elements are added to DOM, then "imageSlides" class elements can be selected out by calling showSlides.*/
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(imageSlideIndex);
});

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
