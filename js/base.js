$(function () {
    // 返回顶部
    $('.back-head').on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    })
    // 导航菜单 展开/收起
    $('.menu').on('click', function (e) {
        e.stopPropagation();
        $('.menu').html($('.mobile-menu ul').is(":hidden") ? '关闭' : '首页')
        $(".mobile-menu > ul").stop().fadeToggle();
    })
    $("html,body").on("click",function(e){
        if ($(".mobile-nav-li").is(':hidden')) {
            // .is('visible')
            // $('.mobile-nav-li').show();
        } else {
            $('.mobile-nav-li').hide();
        }
    })
    // $('.menu').on('touchend',function(){
    //     $('.menu').html($('.mobile-menu ul').is(":hidden") ? '关闭' : '首页')
    //     $(".mobile-menu > ul").fadeToggle();
    // })
    // PC导航栏 点击下划线变化
    $(".pc-nav-li li,.mobile-nav-li").on('click', function (e) {
        // e.stopPropagation();
        // e.preventDefault();
        $(this).addClass("active").siblings('li').removeClass("active")
    })
    // mobile导航栏 点击下划线变化
    $(".mobile-nav-li li").on("touchend", function () {
        var liText = $(this).find('a').html();
        $(".mobile-menu .menu").html(liText);
        $(this).parent().hide();
        var liHref = $(this).find("a").attr("href");
        window.location.href = liHref;
    })

    // 头部 定位
    $(window).on("resize", function () {
        var windowW = $(this).width();
        var scrollH2 = $(window).scrollTop();
        if (windowW >= 992) {
            $("#header").css({
                "position": "fixed"
            })
            $("#main").css({
                "marginTop": "0"
            })
        } else {
            if (scrollH2 > 0) {
                $("#header").css({
                    "position": "fixed",
                })
                $("#main").css({
                    "marginTop": "98px"
                })
            } else {
                $("#header").css({
                    "position": "relative"
                })
                $("#main").css({
                    "marginTop": "0"
                })
            }
        }
        $(window).on("scroll", function () {
            var scrollH = $(window).scrollTop();
            if (scrollH > 0) {
                if (windowW >= 992) {
                    $("#main").css({
                        "marginTop": "0"
                    })
                } else {
                    $("#header").css({
                        "position": "fixed",
                    })
                    $("#main").css({
                        "marginTop": "98px"
                    })
                }
            } else {
                if (windowW >= 992) {
                    $("#header").css({
                        "position": "fixed"
                    })
                } else {
                    $("#header").css({
                        "position": "relative"
                    })
                }
                $("#main").css({
                    "marginTop": "0"
                })
            }
        })
    }).trigger("resize");

    // 联系我们弹窗
    $(".footer-nav .use").on('click', function () {
        if ($(".pop-up").is(':hidden')) {
            $('.pop-up').show();
        } else {
            $('.pop-up').hide();
        }
    })
    $(".pop-up").on("click", function () {
        $(this).hide();
    })
    $(".pop-up .pop-content").on('click', function (e) {
        e.stopPropagation();
    })
})