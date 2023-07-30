$(function () {

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.Header').addClass('on')
        }
        else {
            $('.Header').removeClass('on')
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.tv_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.social_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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