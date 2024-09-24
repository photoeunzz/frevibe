$(function () {

    document.addEventListener("DOMContentLoaded", function() {
        // 레이아웃 조정 코드
    });

    // 우측 하단 고정 버튼이 스크롤시 나타나게 함

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {//아이콘이 나타나길 원하는 높이를 설정하세요
            $('.move_bt').fadeIn();//나타날 아이콘 클래스 수정!
        } else {
            $('.move_bt').fadeOut();//나타날 아이콘 클래스 수정!
        }
    });


    // 햄버거 버튼
    
    $(".hamburger-button").click(function(){
        // ev.preventDefault();
        $(this).toggleClass('active');
        $("#gnb_wrapper").toggleClass('visible');
    });
    
    // 로그인 버튼
    // $(".modal_wrap").hide();
    // $(".h_icon>li:nth-child(1)").click(function(){
    //     $(".modal_wrap").fadeIn();
    //     $("body").addClass("scroll_none");
    // })

     // 상단메뉴고정
     var $header = $(".header");
     $(window).scroll(function () {
         if ($(this).scrollTop()>0) {
             $header.addClass("sticky");
         } else {
             $header.removeClass("sticky");
         }
     });

     // gnb_title 서브메뉴 

    $(".gnb1>li").mouseenter(function(){
        $(".sub_title_hover1").show();
    });

    $(".gnb1>li").mouseout(function(){
        $(".sub_title_hover1").hide();
    });    


    $(".gnb2>li").mouseenter(function(){
        $(".sub_title_hover2").show();
    });

    $(".gnb2>li").mouseout(function(){
        $(".sub_title_hover2").hide();
    }); 


    $(".gnb3>li").mouseenter(function(){
        $(".sub_title_hover3").show();
    });

    $(".gnb3>li").mouseout(function(){
        $(".sub_title_hover3").hide();
    }); 
    
    
    // 로그인 탭메뉴

    // 탭메뉴
    $(".tabmenu ul li").click(function () {
        $(".tabmenu ul li").removeClass("on");
        $(this).addClass("on");

        var i = $(this).index();
        console.log(i);
        $(".tabcon").hide(); 
        $(".tabcon").eq(i).show();
    });



});