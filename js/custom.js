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
        $('.lnb').toggleClass('on');
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




    $('.arrows .left').on('click', function () {
        $('.movie_slide').slick('slickPrev');
    });
    $('.arrows .right').on('click', function () {
        $('.movie_slide').slick('slickNext');
    });



    $('.movie_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    });





    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');
    });

    $('.lnb li>a').on('click', function (e) {
        if ($('.lnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.snb').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.lnb').removeClass('on')
    });

    $('.lnb').on('wheel', function (e) {
        if ($('.lnb').hasClass('on')) {
            e.preventDefault();
        }
    })






})