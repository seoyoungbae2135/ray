// 2023-12-05 homework teacher
let gameImg = ["scissors.png","rock.png","paper.png"]; // 이미지 배열로 저장
const path = "./static/image/"; // 이미지경로 지정

let com=0; // 컴퓨터 이미지 setInterval 값 저장변수
let comIdx=0; //컴퓨터 이미지 인덱스

$(function(){

    $("#comImg").attr("src", path+gameImg[0]); // #comImg에 이미지경로에 있는 

    $("#start").on("click", start);

    $(".user").on("click", result); //유저 가위바위보 클릭시
});

function result(){
    var div = $(this);
    if($("#start").prop("disabled")){
    // .prop("disabled") -> 비활성화 화면 true, 활성화면 false
        div.css("background", "pink");
        var my = clickImg(div);

        clearInterval(com); //setInterval중단

        var ment = gameResult(my);
        $(".res").text(ment);  // #res에 변수 ment의 값을 출력

        $("#start").attr("disabled", false); // #start 버튼 활성화
        $("#start").text("시작"); // #start 버튼 시작으로 변경
    }
}

function gameResult(my){
    var cu = my - comIdx;
    switch(cu){
        case 0:
            return "무";
        case 1: case -2:
            return "승";
        default:
            return "패";
    }
}

function clickImg(div){
    if(div.hasClass("scissors"))
        return 0;
    if( div.hasClass("rock"))
        return 1;
    if(div.hasClass("paper"))
        return 2;
}


function start(){ //컴 가위바위보 이미지 보이기
    com = setInterval( imgRoate, 100); //컴푸터 이미지 돌리기
    $("#start").text("게임중");  // 시작버튼을 게임중으로 변경
    $("#start").attr("disabled",true); // 시작버튼 비활성화
    $(".user").css("background"," ");
}


function imgRoate(){
    if(comIdx==2) comIdx=-1; 
    //comIdx는 컴퓨터 이미지 표현하기위한 인덱스 변수다
    //comIdx의 값이 2가 될때는 화면에 보자기 출력된 후이기때문에 
    // comIdx를 -1로 변경한다
    //++comIdx에 의해 0으로 증가하여 0번 인덱스인 가위이미지가 출력
    $("#comImg").attr("src", path+ gameImg[++comIdx]); // 증감연산자를 앞에두어 comIdx
    
}