function frontResponsiveToggler() {
    var navbar = $('#main-top-navbar');
    var state = $(navbar).attr('class');
    if (state.indexOf('responsive-open') === -1) {
        $(navbar).addClass('responsive-open');
    } else {
        $(navbar).removeClass('responsive-open');
    }
}

function closeResponsiveMenu() {
    $('#main-top-navbar').removeClass('responsive-open');
}

$(document).ready(function () {
    $(window).resize(function () {
        closeResponsiveMenu();
    });

    $(document).on('click', 'a.internal-link[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 1000);
    });
});