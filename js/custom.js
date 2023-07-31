$(function () {

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        }
        else {
            $('.header').removeClass('on')
        }
    });



    $('.ham_btn').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })






    $('.tap_box .top').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tap_on .bottom').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    // document.querySelector('.MainItm .arrows .left').addEventListener('click', () => {
    //     ItmSlide.slidePrev();
    // });

    $('.news_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,

    });
    $('.tv_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    });
    $('.social_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    });


    $('.arrows01 .left').on('click', function () {
        $('.news_slide').slick('slickPrev');
    });
    $('.arrows01 .right').on('click', function () {
        $('.news_slide').slick('slickNext');
    });


    $('.arrows01 .left').on('click', function () {
        $('.tv_slide').slick('slickPrev');
    });
    $('.arrows01 .right').on('click', function () {
        $('.tv_slide').slick('slickNext');
    });


    $('.arrows01 .left').on('click', function () {
        $('.social_slide').slick('slickPrev');
    });
    $('.arrows01 .right').on('click', function () {
        $('.social_slide').slick('slickNext');
    });






    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');
    });

    $('.Gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.snb').stop().slideUp();
    });

    $(window).on('resize', function () {
        $('.Gnb .snb').removeAttr('style')
    })








})