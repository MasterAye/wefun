
$(function(){
    var windowH = $(window).height();
    $(window).on('scroll',function(){
        var scrollH = $(this).scrollTop();
        var ele1 = $(".platform-feature .text-all")
        var ele2 = $(".platform-serve .container .row");
        var ele3 = $(".platform-advantage .adv-head .text-all");
        var ele4 = $(".platform-advantage .adv-body .adv-content");
        var ele5 = $(".buy-project .text-all");
        var ele6 = $(".buy-project .bottom-img");
        var ele7 = $(".try > div");
        var ele8 = $(".partner .text-all");
        var eleArr = [ele1,ele2,ele3,ele4,ele5,ele6,ele7,ele8];
        // var parArr = ['.platform-feature','.platform-serve','.platform-advantage','.platform-advantage','.buy-project','.buy-project','.try']
        var parArr = 'section'
        sectionAddAnimation(eleArr,parArr)
        function sectionAddAnimation(eleArray,parArray) { 
            for(var i = 0;i < eleArray.length; i++){
                var eleH = eleArray[i].offset().top;
                if(scrollH + windowH > eleH + 200){
                    eleArray[i].parents(parArray).addClass('animation');           
                }
            }
        }    
    }).on('load',function(){
        var scrollH = $(this).scrollTop();
        var ele1 = $(".platform-feature .text-all")
        var ele2 = $(".platform-serve .container .row");
        var ele3 = $(".platform-advantage .adv-head .text-all");
        var ele4 = $(".platform-advantage .adv-body .adv-content");
        var ele5 = $(".buy-project .text-all");
        var ele6 = $(".buy-project .bottom-img");
        var ele7 = $(".try > div");
        var ele8 = $(".partner .text-all");

        var eleArr = [ele1,ele2,ele3,ele4,ele5,ele6,ele7,ele8];
        var parArr = "section"
        sectionAddAnimation(eleArr,parArr) 
        function sectionAddAnimation(eleArray,parArray) { 
            for(var i = 0;i < eleArray.length; i++){
                var eleH = eleArray[i].offset().top;
                if(scrollH + windowH > eleH){
                    eleArray[i].parents(parArray).addClass('animation');           
                }
            }
        }  
    }).on('resize',function(){
        var windowW = $(window).width();
        if(windowW <= 768){
            $('#carousel-example-generic').attr("data-interval","false")
        }else {
            $('#carousel-example-generic').removeAttr("data-interval");
        }
    }).trigger('resize')


})