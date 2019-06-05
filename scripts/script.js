function openLinkFromNavigationBar() {
    window.open("home.html","_self");
}

let mainNaviToggle = document.getElementsByClassName('main-navi-icon')[0];
let sidebarLeft = document.getElementById('main-navi-bar');

// debug:
let aa = document.getElementById('main-navi-toggle');

console.log("Here");
console.log(aa);
console.log(mainNaviToggle);

if (mainNaviToggle) {
    // debug below:
    console.log("inside!!");

    mainNaviToggle.addEventListener('click', function() {
        window.open("mobile-navi-bar.html");
    });
}
