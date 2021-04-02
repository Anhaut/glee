$(function() {
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
    });


});