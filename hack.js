document.onclick = function (e) {
    e = e || window.event;
    if (e.which == 3) {
	prevSlide();
    } else {
	nextSlide();
    }
}

window.oncontextmenu = function () {
    prevSlide();
    return false;
}
