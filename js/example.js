$(function () {
    var windowH = $(window).height();
    $(window).on('scroll', function () {
        var scrollH = $(this).scrollTop();
        var ele1 = $(".suc-head .text-all")
        var ele3 = $(".good-field .text-all")
        var ele4 = $(".good-body .outbox")
        var eleArr = [ele1, ele3, ele4];
        var parEle = 'section';
        sectionAddAnimation(eleArr, parEle);

        function sectionAddAnimation(eleArray, parEle) {
            for (var i = 0; i < eleArray.length; i++) {
                var eleH = eleArray[i].offset().top;
                if (scrollH + windowH > eleH) {
                    eleArray[i].parents(parEle).addClass('animation');
                }
            }
        }
    }).on('load', function () {
        var scrollH = $(this).scrollTop();
        var ele1 = $(".suc-head .text-all")
        var ele3 = $(".good-field .text-all")
        var ele4 = $(".good-body .outbox")
        var eleArr = [ele1, ele3, ele4];
        var parEle = 'section';
        sectionAddAnimation(eleArr, parEle)

        function sectionAddAnimation(eleArray, parEle) {
            for (var i = 0; i < eleArray.length; i++) {
                var eleH = eleArray[i].offset().top;
                if (scrollH + windowH > eleH) {
                    eleArray[i].parents(parEle).addClass('animation');
                }
            }
        }
    }).on('resize', function () {
        var windowW = $(this).width();
        if (windowW >= 992) {
            var mySwiper = new Swiper('.swiper-container', {
                //可选选项，自动滑动
                autoplay: {
                    delay: 2000
                },
                loop : true,
                slidesPerView: 4, // 每行4个
                slidesPerColumn: 1, // 3行
                slidesPerColumnFill: 'row', // 顺序排列
                spaceBetween: 24, // 间距
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            })
        } else if (windowW >= 768) {
            var mySwiper = new Swiper('.swiper-container', {
                //可选选项，自动滑动
                autoplay: {
                    delay: 2000
                },
                loop : true,
                slidesPerView: 3, // 每行4个
                slidesPerColumn: 1, // 3行
                slidesPerColumnFill: 'row', // 顺序排列
                spaceBetween: 24, // 间距
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        } else {
            var mySwiper = new Swiper('.swiper-container', {
                //可选选项，自动滑动
                autoplay: {
                    delay: 2000
                },
                loop : true,
                slidesPerView: 2, // 每行4个
                slidesPerColumn: 1, // 3行
                slidesPerColumnFill: 'row', // 顺序排列
                spaceBetween: 24, // 间距
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },

            })
        }
    }).trigger("resize")
})