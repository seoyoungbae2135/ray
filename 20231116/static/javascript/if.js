// javascript_if.html link 
// if문 - 조건식의 참, 거짓에의해 내용을 실행 시킨다.
/*
if(조건식){
    참일 경우 실행할 내용 
}
if 뒤에 직은괄호열어서 안에 조건식을 작성한다. 조건식 뒤에는 중괄호를 열어서
안에 참일경우 실행할 내용을 작성한다.

if(조건식){
    참일경우 실행할 내용
}
else{
    거짓일 경우 실행할 내용
}
조건식이 거짓이라면 첫번째 중괄호는 건너뛰고(jmp) else뒤의 중괄호를 실행 시킨다.
if문에서 조건식을 작성할 수 있는곳은 오직 if뒤에만 가능하다.
else뒤에는 조건식을 넣을 수 없다.

조건에 따라 실행될 애용이 여라개라면(3개이상)
if(조건식){
    내용
}
else{
    if(조건식){
        내용
    }else{
    내용
    내용
    }
}

if(조건식){
    내용
}else if(조건식){
    내용
}else{
    내용
}

*/

//var num = 20; //num이라는 변수공간에 20을 저장해라
// (num>0) ? console.log("양수다") : console.log("음수다");  조건연산자로 할 경우

// if(num>0){
//     console.log("양수다");
// }else{
//     console.log('음수다');
// }
// 조건식을 어떻게 표현할 것인가가 관건이다.

// var birth = parseInt(prompt("생년월일 8자리 입력"));
// // birth = 19991204
// if (birth <= 20041231 ){
//     console.log("성인 입니다");
// }else{
//     console.log("미성년자 입니다.");
// }
// 국어, 영어. 수학 3과목 접수 입력받기
// 3과목의 평균점수가 65점 이상이면 통과라고 출력
// 65점 미만이면 낙제라고 출력하시오.
// me
// var kor=parseFloat(prompt("국어점수"));
// var eng=parseFloat(prompt("영어점수"));
// var mat=parseFloat(prompt("수학점수"));

// var avg=(kor+eng+mat)/3;
// if(avg>=65){
//     console.log(avg+" : 통과");
// }else{
//     console.log(avg+" : 낙제");
// }
// // teacher
// var kor=parseFloat(prompt("국어점수"));
// var eng=parseFloat(prompt("영어점수"));
// var mat=parseFloat(prompt("수학점수"));
// var avg=(kor+eng+mat)/3;
// if( avg >= 65){
//     console.log("통과");

// }else{
//     console.log("낙제");
//}

// 동전 앞면 뒷면 맞추기

// css 선택자 id->#. class->.

// 브라우저에 html태그가 모두 로딩(화면표시)되면 자바스크립트 코드를 실행시키는 방법.

window.onload=function(){   // javascript가 html에 적용될수 있도록 입력
                            // onload -> 핸들링 명령어 window를 핸들링한다 의미

// 가위바위보게임만들기
// 1.가위, 2.바위, 3.보
//me
// var user = parseInt(prompt("1.가위, 2.바위, 3.보 중 1개 입력"));
// var com = parseInt( Math.random()*3)+1;


// if( user == com){
//     alert("비김");
// }else if(user>)

//teacher

// var user = parseInt(prompt("1.가위, 2.바위, 3.보 중 1개 입력"));
var com = Math.floor( Math.random()*3)+1;

var scis = document.getElementById("scissors");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");

scis.addEventListener("click", function(){
    if( com == 1){
        alert("비김");
    }else if( com == 3 ){ alert("승")}
    else{ alert("패")}
    com = Math.floor( Math.random()*3)+1; //f5를 누르지 않아도 계속 실행
    scis.style.background="black";  // 선택한 그림 바탕이 black으로 변경됨
    rock.style.background="white";
    paper.style.background="white";
});
rock.addEventListener("click", function(){
    if(com==2){alert("비김");}
    else if(com==1) {alert("승");}
    else{alert("패");}
    com = Math.floor( Math.random()*3)+1;
    scis.style.background="white";
    rock.style.background="black";
    paper.style.background="white";
});
paper.addEventListener("click", function(){
    if(com==3){alert("비김");}
    else if(com==2) {alert("승");}
    else{alert("패");}
    com = Math.floor( Math.random()*3)+1;
    scis.style.background="white";
    rock.style.background="white";
    paper.style.background="black";
});

// if(com == user){
//     alert("비김")
// }else if((com==1&&user==2) || (com==2&&user==3) || (com3 && user==1)){
//     alert("승");
// }else{
//     alert("패");
// }

//3개의 정수를 입력받아 가장작은 수 출력, 모두 같다면 같다 출력.

// var num1= parseInt(prompt("첫번째정수"));
// var num2= parseInt(prompt("두번째정수"));
// var num3= parseInt(prompt("세번째정수"));

// if(num1==num2 && num1==num3){
//     alert("모두같은숫자");
// }else if((num1<num2 || num1<num2) && (num1<num3 && num1<num3)){
//     alert("작은수:"+num1);
// }else if((num2<num1 && num2<num1) && (num2<num3 && num2<num3)){
//     alert("작은수:"+num2);
// }else if(num3<num1 && num3<num2){
//     alert("작은수:"+num3);    
// }

// if(num1<num2){
//     if(num1<num3){
//         alert("작은수:"+num1);
//     }else{
//         alert("작은수:"+num3);
//     }
// }else if(num2<num3){
//     alert("작은수:"+num2);
// }else{
//     alert("작은수:"+num3);
// }
                            

//     var coin = Math.floor(Math.random()*2)+1; // Math.floor 정수를 가져오는 랜덤함수
//     // javascript html 태그 선택방법
//     var front = document.getElementById("front"); //.innerText="오 글씨"; //html에 있는 id가 front인 div를 선택. 
//                                                             //class는 getElementBysClass("이름")
//                                                             //innerText -  
//                                                             // 지속 사용하기위하여 변수(var = front)에 저장
//     var back = document.getElementById("back");
    
//     front.addEventListener("click", function(){  //addEventListener:이벤트실행명령어, front를 클릭하면 
//         if( coin == 1){
//             alert("정답");
//         }else{
//             alert("땡");
//         }
//         //alert("앞면 선택"); // alert은 알림창을 나타나게하는 명령
//     });
//     back.addEventListener("click",function(){
//         if( coin == 2 ){
//             alert("정답");
//         }else{
//             alert("땡");
//         }
//         //alert("뒷면 선택");
//     });
    
 };


