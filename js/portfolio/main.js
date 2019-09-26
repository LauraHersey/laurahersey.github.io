'use strict';
$(window).on('load', function() {
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");
    var masonryLayout = function() {
        $('.portfolios-area').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    }
    masonryLayout();
    if ($('.portfolios-area').length > 0) {
        var containerEl = document.querySelector('.portfolios-area');
        var mixer = mixitup(containerEl, {
            callbacks: {
                onMixEnd: function() {
                    masonryLayout();
                }
            }
        });
    }
});
(function($) {
    $('.nav-switch').on('click', function() {
        $('.main-menu').slideToggle();
    });
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
    var hero_s = $(".hero-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['', '<img src="img/icons/arrow-right.png" alt="">'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        onInitialized: function() {
            var a = this.items().length;
            $("#snh-1").html("<span>1</span>/<span>" + a + "</span>");
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index
          , a = a.item.count;
        $("#snh-1").html("<span> " + (1 > b ? b + a : b > a ? b - a : b) + "</span>/<span>" + a + "</span>");
    });
    $('.portfolio-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        margin: 0,
        nav: true,
        center: true,
        startPosition: 1,
        navText: ['', '<img src="img/icons/arrow-right.png" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            }
        },
        onInitialized: function() {
            var a = this.items().length;
            $("#snh-1").html("<span>2</span>/<span>" + a + "</span>");
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index
          , a = a.item.count;
        $("#snh-1").html("<span> " + (1 > b ? b + a : b > a ? b - a : b) + "</span>/<span>" + a + "</span>");
    });
    var PorfolioItemFix = function() {
        $(".portfolio-item").each(function(index) {
            var portfolioItem = $(this);
            var PIheight = portfolioItem.width();
            portfolioItem.css('height', PIheight);
        });
        var portfolioIntro = $(".portfolio-item.__wide");
        var Introheight = portfolioIntro.width() / 2;
        if ($(window).width() > 768) {
            portfolioIntro.css('height', Introheight);
        }
        $('.portfolios-area').css('minHeight', Introheight)
    }
    PorfolioItemFix();
    $(window).on('resize', function() {
        PorfolioItemFix();
    });
    if ($('#fullpage').length > 0) {
        $('#fullpage').fullpage({
            autoScrolling: false,
            scrollHorizontally: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            fitToSection: false,
            scrollBar: true,
            navigation: true,
            navigationPosition: 'right',
            responsiveWidth: 991,
        });
    }
}
)(jQuery);
