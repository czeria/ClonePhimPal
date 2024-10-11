window.onscroll = function() {
    var header = document.getElementById("main-header");

    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(68, 0, 128, 0.8)"; // Purple with 70% opacity
    } else {
        header.style.backgroundColor = "transparent"; // Fully transparent
    }
};
