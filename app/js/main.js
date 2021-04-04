$(function() {

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