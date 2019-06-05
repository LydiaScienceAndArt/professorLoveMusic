function openLinkFromNavigationBar() {
    window.open("home.html","_self");
}

let mainNaviToggle = document.getElementById('main-navi-toggle');
let sidebarLeft = document.getElementById('main-navi-bar');

// debug:
let aa = document.getElementsByClassName('main-navi-icon');
let bb = document.getElementsByClassName('section-subtitle');

console.log("Here");
console.log(aa);
console.log(bb);

if (mainNaviToggle) {
    // debug below:
    console.log("inside!!");

    mainNaviToggle.addEventListener('click', function() {
        window.open("mobile-navi-bar.html");
    });
}
