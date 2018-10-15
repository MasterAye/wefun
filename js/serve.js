$(function () {
    var windowH = $(window).height();
    $(window).on('scroll', function () {
        var scrollH = $(this).scrollTop();
        var ele1 = $(".suc-head .text-all")
        var ele2 = $(".suc-case .carousel-inner")
        var ele3 = $(".good-field .text-all")
        var ele4 = $(".good-body .outbox")
        var eleArr = [ele1, ele2, ele3, ele4];
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
        var ele2 = $(".suc-case .carousel-inner")
        var ele3 = $(".good-field .text-all")
        var ele4 = $(".good-body .outbox")
        var eleArr = [ele1, ele2, ele3, ele4];
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
        
        var windowW = $(window).width();
        if (windowW <= 992) {
            var itemEle1 = $(".suc-case .carousel-inner .item").eq(0);
            var itemEle2 = $(".suc-case .carousel-inner .item").eq(1);
            var itemEle3 = $(".suc-case .carousel-inner .item").eq(2);
            var itemCssArr = [itemEle1,itemEle2,itemEle3];
            itemEleAddCss(itemCssArr)
            function itemEleAddCss(eleArr){  
                for(var i = 0; i < eleArr.length; i++){
                    eleArr[i].css({
                        "transition": "all 0.3s ease-out 0s",
                        "opacity": "0",
                        "transform": "translateX(100%)",
                    })
                }
            }
        
            var eleArray = [itemEle1, itemEle2, itemEle3]
            itemScrollAni(eleArray);
            function itemScrollAni(eleArray) {
                for (var i = 0; i < eleArray.length; i++) {
                    var eleH = eleArray[i].offset().top;
                    if (scrollH + windowH > eleH) {
                        eleArray[i].css({
                            "opacity": "1",
                            "transform": "none",
                        });
                    }
                }
            }
           
        } else {}
    }).on('resize', function () {
        var windowW = $(window).width();
        if (windowW <= 992) {
            var itemEle1 = $(".suc-case .carousel-inner .item").eq(0);
            var itemEle2 = $(".suc-case .carousel-inner .item").eq(1);
            var itemEle3 = $(".suc-case .carousel-inner .item").eq(2);
            var itemCssArr = [itemEle1,itemEle2,itemEle3];
            itemEleAddCss(itemCssArr)
            function itemEleAddCss(eleArr){  
                for(var i = 0; i < eleArr.length; i++){
                    eleArr[i].css({
                        "transition": "all 0.3s ease-out 0s",
                        "opacity": "0",
                        "transform": "translateX(100%)",
                    })
                }
            }
            $(window).on('scroll', function () {
                var scrollH = $(this).scrollTop();
                var eleArray = [itemEle1, itemEle2, itemEle3]
                itemScrollAni(eleArray);
                function itemScrollAni(eleArray) {
                    for (var i = 0; i < eleArray.length; i++) {
                        var eleH = eleArray[i].offset().top;
                        if (scrollH + windowH > eleH) {
                            eleArray[i].css({
                                "opacity": "1",
                                "transform": "none",
                            });
                        }
                    }
                }
            })
            var scrollH = $(this).scrollTop();
            var eleArray = [itemEle1, itemEle2, itemEle3]
            itemScrollAni(eleArray);
            function itemScrollAni(eleArray) {
                for (var i = 0; i < eleArray.length; i++) {
                    var eleH = eleArray[i].offset().top;
                    if (scrollH + windowH > eleH) {
                        eleArray[i].css({
                            "opacity": "1",
                            "transform": "none",
                        });
                    }
                }
            }
        } else {}
    }).trigger('resize');
})