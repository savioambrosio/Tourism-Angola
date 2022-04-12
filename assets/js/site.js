$(window).bind('scroll', () => {
    const navbar = $('.navbar')

    if ($(window).scrollTop() > 100) {
        navbar.addClass("box-shadow bg-danger-2")
    }
    else {
        navbar.removeClass("box-shadow bg-danger-2")
    }
})