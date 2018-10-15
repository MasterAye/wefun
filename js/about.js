$(function () {
    var windowH = $(window).height();
    $(window).on('scroll', function () {
        var scrollH = $(this).scrollTop();
        var ele6 = $(".company-profile .text-all");
        var ele1 = $(".we-team .text-all");
        var ele2 = $(".we-team .team-body .team-list").eq(0);
        var ele3 = $(".we-team .team-body .team-list").eq(1);
        var ele4 = $(".we-team .team-body .team-list").eq(2);
        var ele5 = $(".we-team .team-body .team-list").eq(3);
        var eleArr = [ele6, ele1, ele2, ele3, ele4, ele5];
        sectionAddAnimation(eleArr)

        function sectionAddAnimation(eleArray) {
            for (var i = 0; i < eleArray.length; i++) {
                var eleH = eleArray[i].offset().top;
                if (scrollH + windowH > eleH - 98) {
                    eleArray[i].addClass('animation');
                    if (i >= 2) {
                        eleArray[i].css({
                            "opacity": '1',
                            "transition": 'all 0.3s ease-out 0.' + i + 's',
                            "transform": "none"
                        })
                    }
                }
            }
        }
    }).on('load', function () {
        var scrollH = $(this).scrollTop();
        var ele6 = $(".company-profile .text-all");
        var ele1 = $(".we-team .text-all")
        var ele2 = $(".we-team .team-body .team-list").eq(0);
        var ele3 = $(".we-team .team-body .team-list").eq(1);
        var ele4 = $(".we-team .team-body .team-list").eq(2);
        var ele5 = $(".we-team .team-body .team-list").eq(3);
        var eleArr = [ele6, ele1, ele2, ele3, ele4, ele5];
        sectionAddAnimation(eleArr)

        function sectionAddAnimation(eleArray) {
            for (var i = 0; i < eleArray.length; i++) {
                var eleH = eleArray[i].offset().top;
                if (scrollH + windowH > eleH) {
                    eleArray[i].addClass('animation');
                    if (i >= 2) {
                        eleArray[i].css({
                            "opacity": '1',
                            "transition": 'all 0.3s ease-out 0.' + i + 's',
                            "transform": "none"
                        })
                    }
                }
            }
        }
    }).on('resize', function () {
        var windowW = $(window).width();
        if (windowW <= 768) {
            // $('#carousel-example-generic').attr("data-interval","false")
        } else {
            // $('#carousel-example-generic').removeAttr("data-interval");
        }
    }).trigger('resize')


})