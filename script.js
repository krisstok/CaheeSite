// scroll-icon

$('.scroll').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.about').offset().top
    }, 500)
})

// GoTosections

$('li a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})

$('li a').on('click', function () {
    $('.bar-nav').removeClass('active');
    $('.fa-bars').removeClass('active');
})

// bar-menu

const bar = document.querySelector('.fa-bars');
const nav = document.querySelector('.bar-nav');

bar.addEventListener('click', function () {
    bar.classList.toggle('active');
    nav.classList.toggle('active');
})