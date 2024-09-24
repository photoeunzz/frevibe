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
    

     // 상단메뉴고정
     var $header = $(".header");
     $(window).scroll(function () {
         if ($(this).scrollTop()>0) {
             $header.addClass("sticky");
         } else {
             $header.removeClass("sticky");
         }
     });
 
    //  new_heart 버튼 시 모달창 생성
    $(".new_modal_wrap").hide();
    $(".heart_modal").click(function () {
        $(".new_modal_wrap").show();
        $("body").addClass("new_scroll_none");
    });
    $(".cancel").click(function () {
        $(".new_modal_wrap").hide();
        $("body").removeClass("new_scroll_none");
    });
    
    $(".new_modal_wrap").hide();
    $(".buy_modal").click(function () {
        $(".new_modal_wrap").show();
        $("body").addClass("new_scroll_none");
    });
    $(".cancel").click(function () {
        $(".new_modal_wrap").hide();
        $("body").removeClass("new_scroll_none");
    });


    // 모달창 방지 

    




    
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


    // discount_슬라이드 이미지

    // 1번
    $(".text1").mouseenter(function(){
        $(".hover_text1").show();
    });

    $(".text1").mouseout(function(){
        $(".hover_text1").hide();
    });


    // 2번
    $(".text2").mouseenter(function(){
        $(".hover_text2").show();
    });

    $(".text2").mouseout(function(){
        $(".hover_text2").hide();
    });


    // 3번
    $(".text3").mouseenter(function(){
        $(".hover_text3").show();
    });

    $(".text3").mouseout(function(){
        $(".hover_text3").hide();
    });


    // 4번
    $(".text4").mouseenter(function(){
        $(".hover_text4").show();
    });

    $(".text4").mouseout(function(){
        $(".hover_text4").hide();
    });


    // 5번
    $(".text5").mouseenter(function(){
        $(".hover_text5").show();
    });

    $(".text5").mouseout(function(){
        $(".hover_text5").hide();
    });


    // 6번
    $(".text6").mouseenter(function(){
        $(".hover_text6").show();
    });

    $(".text6").mouseout(function(){
        $(".hover_text6").hide();
    });


    // slide-in-box 우측_디자인 요소
    const sections = document.querySelectorAll('.slide-in-box');

        window.addEventListener('scroll', () => {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        });
        
    
    //.sub_star 스크롤 시 나타나게

        const sections2 = document.querySelectorAll('.sub_star');

        window.addEventListener('scroll', () => {
            sections2.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
        });
        });



    // .weare_check 
        const sections3 = document.querySelectorAll('.weare_check');

        window.addEventListener('scroll', () => {
            sections3.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
        });
        });


    // bar_inner 디자인 요소 

    const sections4 = document.querySelectorAll('.bar_inner');

        window.addEventListener('scroll', () => {
            sections4.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
        });
        });

    // pp pp_left_linestar 디자인 요소 

    const sections5 = document.querySelectorAll('.pp_left_linestar');

        window.addEventListener('scroll', () => {
            sections5.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
        });
        });

    // .counter_box 
    const sections6 = document.querySelectorAll('.counter_box');

        window.addEventListener('scroll', () => {
            sections6.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
        });
        });


    
    
    
});