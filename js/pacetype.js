$(document).ready(function() {
    // Before bringing in pace.js
    paceOptions = {
        elements: {
            selectors: ['img'],
        },
        restartOnRequestAfter: false,
        restartOnPushState: false,
    };

    Pace.on('done', function() {
        $('.content').fadeIn(1000, function() {
            $('.typed-cursor').remove();
            paceOptions.startOnPageLoad = false;
            $('.typed_title').typed({
                strings: ['Hello!^1000', "I'm Rodrigo^1000 and i'm a Web Developer."],
                typeSpeed: 0,
            });
        });
    });
    $(function() {
        $(document).scroll(function() {
            var $nav = $('.fixed-top');
            var $presentation = $('.presentation');
            $nav.toggleClass('scrolled', $(this).scrollTop() > $presentation.height() - 100);
        });
    });
    $('body').scrollspy({ target: '.navbar', offset: 120 });
});
