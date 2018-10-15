$(function () {
    var windowH = $(window).height();
    $(window).on('scroll', function () {
        var scrollH = $(this).scrollTop();
        var eleArr = $(".course .course-list .course-content");
        sectionAddAnimation(eleArr);

        function sectionAddAnimation(eleArray) {
            for (var i = 0; i < eleArray.length; i++) {
                var eleH = eleArray.eq([i]).offset().top;
                if (scrollH + windowH > eleH + 200) {
                    eleArray.eq([i]).css({
                        "opacity": "1"
                    })
                }
            }
        }
    }).trigger("scroll");
    // on("load", function () {
    //     console.log("11111")
    //     var scrollH = $(this).scrollTop();
    //     var eleArr = $(".course .course-list .course-content");
    //     sectionAddAnimation(eleArr);

    //     function sectionAddAnimation(eleArray) {
    //         for (var i = 0; i < eleArray.length; i++) {
    //             var eleH = eleArray.eq([i]).offset().top;
    //             if (scrollH + windowH > eleH + 200) {
    //                 eleArray.eq([i]).css({
    //                     "opacity": "1"
    //                 })
    //             }
    //         }
    //     }
    // });
});