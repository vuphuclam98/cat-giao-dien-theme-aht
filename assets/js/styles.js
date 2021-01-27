$(document).ready(function () {
    $(".show__menu").click(function(){
        $(".header-nav,.roat").toggleClass("active");
    });

    $(".close__menu,.roat").click(function(){
        $(".header-nav,.roat").removeClass("active");
    });

    /* ẩn phần thừa khi click slide products */
    $(".btn__next,.btn__prev").click(function(){
        $(".carousel-inner").removeClass("overflow-hiden");
    });

    $(".product-item").hover(function(){
        $(".carousel-inner").addClass("overflow-hiden");
    });
    /* dropdown menu  */
    $("#btn-cate__show").click(function(){
        $("#dropdown-categories").toggleClass("show");
    });
    /* carousel */
    $('.carousel').carousel({
        pause: true
    });

    $(".top-menu__item").click(function(){
        $(this).toggleClass('show');
        $(this).siblings().toggleClass('hiden');
    });
    $(".btn__search").click(function(){
        $(".input-left").addClass('show');
        setTimeout(function(){
            $(".form-search").addClass('show');
        },500);
    });
});

