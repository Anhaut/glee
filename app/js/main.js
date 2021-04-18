$(function() {

    $('.nav-user__menu').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.product-tabs__top-item').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');

    });

    $('.related__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.related__btn-prev'),
        nextArrow: $('.related__btn-next')

    });

    $('.product-slide__thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        draggable: false,
        asNavFor: '.product-slide__big'
    });

    $('.product-slide__big').slick({
        draggable: false,
        arrows: false,
        fade: true,
        asNavFor: '.product-slide__thumb'
    });

    $('.catalog-content__filter-btn').on('click', function() {
        $('.catalog-content__filter-btn').removeClass('catalog-content__filter-btn--active');
        $(this).addClass('catalog-content__filter-btn--active');

    });

    $('.button-list').on('click', function() {
        $('.products-item').addClass('products-item--list');
    });

    $('.button-grid').on('click', function() {
        $('.products-item').removeClass('products-item--list');
    });

    $('.product-item__num').styler();


    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        onStart: function(data) {
            $('.catalog-price__from').text(data.from);
            $('.catalog-price__to').text(data.to);
        },
        onChange: function(data) {
            $('.catalog-price__from').text(data.from);
            $('.catalog-price__to').text(data.to);
        },

    });

    $(".star").rateYo({
        starWidth: "10px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        spacing: "7px",
    });

    $(".products-item__star").rateYo({
        starWidth: "20px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        spacing: "14px",
    });


});