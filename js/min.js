$(function () {

    // Show Navbar When click Icon
    $('i.icon').click(function(){
        $('.navbar .navbar-nav').slideToggle()
        });
    // add class active navbar
    'use strict';
    $('.nav-item a').click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
        $('.navbar .navbar-nav').slideUp();

        //aintame to el
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 2
        }, 2000);
    });

    $(window).scroll(function () {
        //navbar links with sections
        $('.block').each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockId = $(this).attr('id');
                $('.nav-item a').removeClass('active');
                $('.nav-item a[data-scroll="' + blockId + '"]').addClass('active');
            }
        });

        //scroll To Top Button
        if ($(window).scrollTop() >= $(window).height() + 500) {
            $('.scroll-top i').fadeIn(500);
        } else {
            $('.scroll-top i').fadeOut(200);
        }

        //add navbar-fixed
        if ($(window).scrollTop() >= $(window).height()) {
            $('.navbar').addClass('fixed-nav');
        } else {
            $('.navbar').removeClass('fixed-nav');
        }
    });

    //click button go to top
    $('.scroll-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    // hieght slider
    var winH     = $(window).height(),
        upperH   = $('.uper-bar').innerHeight(),
        navH     = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));

    // Featured work shuffle
    $('.featured-work ul li').click(function () {
        $(this).addClass('active-work').siblings().removeClass('active-work');
        if ($(this).data('class') === 'all') {
            $('.shuffle-img .col-sm-3').css('opacity', 1);
        } else {
            $('.shuffle-img .col-sm-3').css('opacity', '.08');
            $($(this).data('class')).css('opacity', 1);
        }
    });





});