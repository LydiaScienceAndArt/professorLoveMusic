function openLinkFromNavigationBar() {
    window.open("home.html","_self");
}

/*need to wait until elements are loaded and added to DOM*/
document.addEventListener('DOMContentLoaded', (event) => {
    checkMainNaviToggle();
});

/*Notice: It hasn't been decided whether to implement middle-size devices(400px-800px screen)*/
/*Relevant code is commented out for now, can add back/finish code implementation when needed*/
function checkMainNaviToggle() {
    let mainNaviToggle = document.getElementById('main-navi-toggle');
    let sidebarRightSmallDevice = document.getElementById('sidebar-right-small-device');
    // let sidebarLeftMiddleDevice = document.getElementById('sidebar-left-container');
    let bodyRightContainer = document.getElementById('body-right-container');

    if (mainNaviToggle) {
	mainNaviToggle.addEventListener('click', function() {
	    if (sidebarRightSmallDevice) {
		if (sidebarRightSmallDevice.classList.contains('sidebar-right-small-device-off')) {
		    sidebarRightSmallDevice.classList.toggle('sidebar-right-small-device-on');
		}

		if (sidebarRightSmallDevice.classList.contains('sidebar-right-small-device-on')) {
		    sidebarRightSmallDevice.classList.toggle('sidebar-right-small-device-off');
		}
	    }
            
	    /*
	    if (sidebarLeftMiddleDevice) {
		// Notice: below sidebar-left is "display: none"
		if (sidebarLeftMiddleDevice.classList.contains('sidebar-left')) {
		    sidebarLeftMiddleDevice.classList.toggle('sidebar-left-middle-device-on');
		    bodyRightContainer.classList.toggle('body-right-middle-device-with-sidebar-left'); 
		}
	       
		if (sidebarLeftMiddleDevice.classList.contains('sidebar-left-middle-device-on')) {
		    sidebarLeftMiddleDevice.classList.toggle('sidebar-left');
		    bodyRightContainer.classList.toggle('body-right');     
		}
	    }
	    */
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

    // only execute when page is on gardener.html
    if (slides.length == 0) {
        return;
    }

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
