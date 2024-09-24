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


    // notice 아코디언

    $(".notice> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
	});
    });
    $(function(){
        $(".notice> ul> li").click(function(){
            $(this).toggleClass("turn");
            
            if($(this).hasClass("turn")===true){
                    $(this).siblings().removeClass("turn");
                
            }

	});


    //  last_review 이미지 버튼 시 모달창 생성
    $(".last_modal_wrap").hide();
    $(".last_inner1").click(function () {
        $(".last_modal_wrap").show();
        $("body").addClass("last_scroll_none");
    });
    $(".modal_close").click(function () {
        $(".last_modal_wrap").hide();
        $("body").removeClass("last_scroll_none");
    });
    


    // review modal 내에 유용해요 버튼 

    $(".like_bt").click(function(){
        $(".like_hover").show();
    });
    $(".like_hover").click(function(){
        $(".like_hover").hide();
    });

    // review modal 내에 신고차단 버튼 

    $(".x_bt").click(function(){
        $(".x_hover").show();
    });
    $(".x_hover").click(function(){
        $(".x_hover").hide();
    }); 



    // notice 디자인 요소 스크롤 시

    // .notice_star_top 우측_디자인 요소
    const sections = document.querySelectorAll('.notice_star_top');

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

    // .notice_star_bt 우측_디자인 요소
    const sections2 = document.querySelectorAll('.notice_star_bt');

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
    
    // .error notice 
    const sections3 = document.querySelectorAll('.error');

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
    
     // .review_main
    const sections4 = document.querySelectorAll('.review_main');

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

     // .review_warning
     const sections5 = document.querySelectorAll('.review_warning');

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
 
        

});