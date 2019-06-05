function openLinkFromNavigationBar() {
    window.open("home.html","_self");
}

let mainNaviToggle = document.getElementById('main-navi-toggle');
let sidebarLeft = document.getElementById('main-navi-bar');

if (mainNaviToggle) {
    // debug below:
    console.log("inside!!");

    mainNaviToggle.addEventListener('click', function() {
        window.open("mobile-navi-bar.html");
    });
}
