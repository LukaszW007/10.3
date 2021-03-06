$(document).ready(function () {
    console.log('DOM loaded - you can have fun');

    var dot = $('.dots li');
    var doti = $('.dots li i');
    var picture = $('.gallery li');
    var pictureNo;
    var dotNo;

    $(function () {
        var carouselList = $('#carousel .gallery');

        function changeSlideLeft() {
            carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
        };

        function changeSlideRight() {
            moveLastSlide();
            carouselList.animate({'marginLeft': 0}, 500);
        };

        function moveFirstSlide() {
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            lastItem.after(firstItem);
            carouselList.css({marginLeft: 0})
        };

        function moveLastSlide() {
            carouselList.css({marginLeft: -400});
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
        };

        /*When user click right arrow then left margin of .gallery list is changing about width of one picture (400px). Then last picture which is on the very left
        * goes to the very right as first item.*/
        $('.rightArrow').click(function () {
            changeSlideLeft();
            pictureNo = $(picture).index();
            switch (pictureNo) {
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
        });
        /*When user click left arrow then left margin of .gallery list is changing about width of one picture (400px). Then first picture which is on the very right
        * goes to the very left as last item with still -400px margin-left. Then whole .gallery is animated by changing margin-left to 0 - .gallery moves to the right.*/
        $('.leftArrow').click(function () {
            changeSlideRight();
            pictureNo = $(picture).index();
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
        });
        function multipleSlideLeft(iterations){
            for (var i=1;i<=iterations;i++){
                changeSlideLeft();
            }
        }
        function multipleSlideRight(iterations){
            for (var i=1;i<=iterations;i++){
                changeSlideRight();
            }
        }
        $(dot).click(function () {
            dotNo = dot.index(this);
            dotNoActive = $('.dots li.active').index();
            changeColorDots(dotNo);
            pictureNo = $(picture).index();
            alert("wybrana kropka "+dotNo);
            alert("aktywna kropka "+dotNoActive);
            alert("zdjecie "+pictureNo);
            if(dotNo>dotNoActive){
                multipleSlideLeft(dotNo-dotNoActive);
            }else if(dotNo<dotNoActive) {
                multipleSlideRight(dotNoActive-dotNo);
            }
            /*switch (dotNo>) {
                case 0:
                    var iter =Math.abs(0-dotNo);
                    multipleSlideLeft(iter);
                    break;
                case 4:
                    var iter =Math.abs(1-dotNo);
                    multipleSlideLeft(iter);
                    break;
                case 3:
                    var iter =Math.abs(2-dotNo);
                    multipleSlideLeft(iter);
                    break;
                case 2:
                    var iter =Math.abs(3-dotNo);
                    multipleSlideLeft(iter);
                    break;
                case 1:
                    var iter =Math.abs(4-dotNo);
                    multipleSlideLeft(iter);
                    break;
            }*/
        });
    });

    function changeColorDots(dotNumber) {
        $(dot).css('color', 'rgba(255,255,255,0.3)');
        $(dot).removeClass("active");
        $(dot).eq(dotNumber).css('color', 'black');
        $(dot).eq(dotNumber).addClass("active");

    };
    /*function multipleSlideLeft(iterations){
        for (var i=0;i<=iterations;i++){
            changeSlideLeft();
        }
    }

    $(dot).click(function () {
        dotNo = dot.index(this);
        changeColorDots(dotNo);
        pictureNo = $(picture).index();
        alert(dotNo);
        alert(pictureNo);
        switch (pictureNo) {
            case 0:
                var iter =Math.abs(0-dotNo);
                multipleSlideLeft(iter);
                break;
            case 4:
                var iter =Math.abs(1-dotNo);
                multipleSlideLeft(iter);
                break;
            case 3:
                var iter =Math.abs(2-dotNo);
                multipleSlideLeft(iter);
                break;
            case 2:
                var iter =Math.abs(3-dotNo);
                multipleSlideLeft(iter);
                break;
            case 1:
                var iter =Math.abs(4-dotNo);
                multipleSlideLeft(iter);
                break;
        }
    });*/
});/*odczytywac wartosc obecnej kropki i kliknietej kropki. jezeli index jest mniejszy to slide left jezeli wiekszy to slide right. powinno zadzialac*/