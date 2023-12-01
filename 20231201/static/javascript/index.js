
let slide_idx=0;



$(function(){
    $(".menuList>.menuItem").on("mouseover",function(){ // 메뉴리스트의 메뉴아이템에 마루스를 올리면
        $(this).children(".subMenu").slideDown(); //메뉴아이템(this)아래 서브메뉴를 보여라
        // show(), hide(), toggle();
        //fadeIn(), fadeOut(), fadeToggle
        //slideDown(3000) -> 밀리초, slideUp, slideToggle()
    });

    $(".menuList>.menuItem").on("mouseout",function(){ // 마우스가 벗어나면 
        $(this).children(".subMenu").slideUp();  // 서브메뉴가 숨겨진다
    });


    // 슬라이드이미지 구현
    $(".leftBt").on("click",function(){ 
        if(slide_idx != $(".slideImg").length-1){  //마지막 이미지일 경우 이동불가
        slide_idx++;
        $(".slideList").css("right",(slide_idx*1200)+"px"); 
        }
    });

    $(".rightBt").on("click",function(){ //첫번째 이미지일 경우 이동불가
        if(slide_idx!=0){
        slide_idx--;
        $(".slideList").css("right",(slide_idx*1200)+"px");
        }
    });

    // 자동 슬라이드 이미지
    // 시간을 제어
    // serTimeout - 지정한 시간이후 단한번 동작,
    // setInterval - 지정한 시간 간격으로 계속동작
    // setInteval( 실행할 내용(함수), 시간(밀리세컨드)); 
    setInterval(
        function(){
            if(slide_idx != $(".slideImg").length-1){
                slide_idx++;
                $(".slideList").css("right",(slide_idx*1200)+"px"); 
            }else{
                slide_idx=0;
                $(".slideList").css("right",(slide_idx*1200)+"px");
            }
        } , 2000
    );

    // function save(){   } 이함수는 save라는 이름이 있는 함수 - 다른곳에서 사용가능
    // function(){   } 이름이 없는 

});