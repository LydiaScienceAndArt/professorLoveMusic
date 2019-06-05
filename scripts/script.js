function openLinkFromNavigationBar() {
    window.open("home.html","_self");
}

/*need to wait until elements are loaded and added to DOM*/
document.addEventListener('DOMContentLoaded', (event) => {
    checkMainNaviToggle();
});

function checkMainNaviToggle() {
    let mainNaviToggle = document.getElementById('main-navi-toggle');
    let sidebarLeft = document.getElementById('main-navi-bar');

    mainNaviToggle.addEventListener('click', function() {
        window.open("index.html");
	sideBarLeft.classList.toggle('active');
    });
}
