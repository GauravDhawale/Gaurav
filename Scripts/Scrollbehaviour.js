$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 2);
        e.preventDefault();
    },{ passive: false });
});