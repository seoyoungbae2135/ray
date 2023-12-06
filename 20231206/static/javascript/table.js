
$(function(){
     // 아래 두줄은 테이블이 만들어 지지않으면 크기와 색상 버튼을 클릭할 수 없도록 하기위한코드
    $("#size").attr("disabled",true); // #size를 비활성화 시킨다 - 테이블이 만들어지면 활성화하도록 table.js코드에 활성화코드 적용
    $("#color").attr("disabled",true); // #color를 비활성화 시킨다 - 테이블이 만들어지면 활성화하도록 size.js코드에 활성화코드 적용

    $("#make").on("click", function(){
        openPage("make");
    });

    $("#size").on("click", function(){
        // if( $("#draw>table").length);  테이블이 만들어지기전에는 size와 color 버튼을 비활성화 만들다 중단
        openPage("size");
    });

    $("#color").on("click", function(){
        openPage("color");
    });
});

function openPage(page){

    var sheight = screen.availHeight; // 현재 스크린의 높이 값(px)을 sheight에 저장
    var swidth = screen.availWidth;  // 현재 스크린의 너비값(px)을 swidth에 저장
    
    // 새페이지 - window.open(주소, 대상, 옵션)
    // 대상(target) - _blank, _self, _parent(자식창이생긴다) 옵션에 "width=500,hidgth=500" 의경우 500*500 브라우저가 생긴다
    child = window.open( page+".html", "", 
        "width=500,height=300, top="+(sheight/2-150)+",left="+(swidth/2-250))  // window.open 새로운창을 여는 함수,
    // child = window.open : 자식창으로 새창을 열어라  
    // 함수에 있는 page 변수.html파일을 크기500*300 top에서 높이px/2-150(창높이의 반) 과 left에서 너비px/2-250(창너비의 반) 위치에 열어라 

}

// 브라우저 에는 Dom이라는 구조를 사용하여 페이지를 표시한다.
// document object model - html문서를 객체화
// html 문서의 내용이 브라우저 화면에 표시되는 과정
// 파싱- 렌더링- 과정을 거쳐 표시 