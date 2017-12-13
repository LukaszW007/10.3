$(document).ready(function () {
    console.log('DOM loaded - you can have fun');

    $(function () {
        var carouselList = $('#carousel .gallery');

        function changeSlideLeft() {
            carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
        };

        function changeSlideRight() {
            carouselList.animate({'marginRight': -400}, 500, moveLastSlide());
        };

        function moveFirstSlide() {
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            lastItem.after(firstItem);
            carouselList.css({marginLeft: 0})
        };

        function moveLastSlide() {
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
            carouselList.css({marginRight: 0})
        };
        // setInterval(changeSlide, 3000);

        $('.rightArrow').click(function () {
            changeSlideLeft();
        });
        $('.leftArrow').click(function () {
            changeSlideRight();
        });
    });
}, true);