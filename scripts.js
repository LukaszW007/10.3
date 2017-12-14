$(document).ready(function () {
    console.log('DOM loaded - you can have fun');

    var dot = $('.dots li');
    var picture = $('.gallery li');
    var pictureNo;
    var dotNo;
    // alert('zdjecie'+$(picture).index());
    // alert('kropka'+$(dot).index());
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
            // alert('changeSlideLeft uzyty');
            pictureNo=$(picture).index();
            // alert('pictureNo: '+pictureNo);
            switch (pictureNo){
                case 0:
                    changeColorDots(1);
                    break;
                case 1:
                    changeColorDots(0);
                    break;
                case 2:
                    changeColorDots(4);
                    break;
                case 3:
                    changeColorDots(3);
                    break;
                case 4:
                    changeColorDots(2);
                    break;
            }
            // alert(pictureNo);
            // alert('zdjecie'+$(picture).index());
            // alert('kropka'+$(dot).index());
        });
        $('.leftArrow').click(function () {
            changeSlideRight();
            pictureNo = $(picture).index();
            // alert('pictureNo: ' + pictureNo);
            switch (pictureNo) {
                case 0:
                    changeColorDots(0);
                    break;
                case 1:
                    changeColorDots(4);
                    break;
                case 2:
                    changeColorDots(3);
                    break;
                case 3:
                    changeColorDots(2);
                    break;
                case 4:
                    changeColorDots(1);
                    break;
            }
            // alert(pictureNo);
            // alert('zdjecie' + $(picture).index());
            // alert('kropka' + $(dot).index());
        });
    });
     function changeColorDots(dotNumber) {
         $(dot).css('color','rgba(255,255,255,0.3)');
         $(dot).eq(dotNumber).css('color','black');
     };
        // var dot = $('.dots li');
        // var picture = $('.gallery li');
        // var pictureNo;
        // var dotNo;


            $(dot).click(function () {
                dotNo=dot.index(this);
                changeColorDots(dotNo);
                //pictureNo=$(picture).eq(dotNo);
                pictureNo = $(picture).index();
                alert(dotNo);
                alert(pictureNo);
            });



}, true);