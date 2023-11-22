// script_array.html link
// 배열
// 배열 - 변수를 연속적으로 나열되어있는공간
// 변수는 단하나값만 저장할 수 있지만 
// 배열은 다수의 값을 저장할 수 있다
// 많은데이터를 저장하고 관리하기에 가장 쉬운 방법이다.

// var arr1 = [];   // 배열을 만드는 1번 방법
// var arr2 = [12,23,34,45]; // 배열을 만드는 2번 방법
// var arr3 = new Array();  // 배열을 만드는 표준 방법

// arr3.push(45);
// arr3.push(23);
// arr3.push("이민재");
// arr3.push("노재홍");
// arr3.push(3.14);

// //alert(arr3);
// document.write(arr3[3]);  // 배열을 할때는 반복문을 사용해야한다. for문

// for(var i=0; i<arr3.length; i++){
//     document.write(arr3[i] + " ");  //배열을 잘하려면 인덱스 표현를 잘해야 한다. 인덱스내 계산식 등
// }
//     // 배열을 만들때는 var가 아닌 let 또는 const로 만든다.
//     // var로 만들면 변수 재입력시 주소가 지워진다
// let name=["이순신","강감찬","장보고","장영실","이성계"];  
// document.write("<br"+name);
// name[2] = "김춘추";
// document.write("<br>"+name);
// // 배열에 새로운 데이터 저장 - push
// // push는 배열의 마지막에 데이터를 저장한다

// // 배열에 저장된 데이터 삭제 - pop
// document.write("마지막데이터삭제"); name.pop(); // 가장 뒤쪽 데이터를 삭제
// document.write("<br>"+name);

// // 배열의 맨앞쪽에 저장 - unshift()
// name.unshift("정도전");
// document.write("<br>"+name);
// //배열 맨 앞쪽 삭제 - shift()
// name.shift();
// document.write("<br>"+name);

// //배열의 특정위치에 추가하거나 삭제 - splice
// name.splice(2, 0, "정약용","김유신","문익점");  // splicedml 첫번째 숫자:인덱스번호 2번째숫자:삭제할 데이터
// // 2번째 인덱스에서 0개 삭제하고 3개 데이터 추가
// document.write("<br>"+name);
// name.splice(2,2);
// // 2번째 인덱스부터 2개 삭제
// document.write("<br>"+name);

// // 배열에서 특정위치의 데이터를 가져오기 - slice

// let name2 = name.slice(1,3);
// document.write("<br>"+name2);
// document.write("<br>"+name);

// // 다수의 배열을 하나로 합치기 - concat
// let name3 = name.concat(name2);
// document.write("<br>concat - "+name3 );

// //배열에 저장된 데이터들을 사전적 순서로 정렬 - sort
// name3.sort();
// document.write("<br>sort - "+name3); 

// // 배열을 역순으로 정렬 - reverse (먼저 sort를 실행)
// name3.reverse();
// document.write("<br> reverse - "+name3);

// //배열의 모든데이터를 지정된 문자로 연결하여 
// // 하나의 문자열로 변환 -join
// var str = name3.join("-");
// document.write("<br>join - "+str);

// document.write("<br>" + (str.split("-")));

// let num = new Array();

// for(var i=1; i<=10; i++){
//     num.push( Math.floor(Math.random()*50)+1);
// }
// document.write(num+"<br>");

//배열에 저장된 숫자중 5의 배수만 출력하시오
// me
// for(var i=0; i<num.length; i++){
//     if(num[i]%5==0){
//         // num[i] = num[i]+1;
//         document.write(num[i]+"<br>");
//     }
// }


// teacher
// for(var i=0; i<num.length; i++){
//     if(num[i]%5 == 0){
//         document.write(num[i]+"<br>");
//     }
// }

// let temp = new Array();
// for(var i=0; i<num.length; i++){
//     if(num[i]%5 == 0)
//         temp.push(num[i]);
// }
// document.write("5의배수 : "+temp+"<br>");

// for(var i=0; i<num.length; i++){
//     if(num[i]%2==1){
//         num[i] = num[i]+1;
//     }
// }
// document.write(num+"<br>");

// const subject=["국어","수학","영어","과학"];  //const는 저장된 데이터를 삭제할 수 없다

// for(var i=0; i<subject.length; i++){
//     var score = prompt(subject[i]+"점수입력");
// }

// 입력박스 만들어서 점수입력 총점, 평균 출력 코드작성

// const subject=["국어","수학","영어","과학"];
// let idx=0; //subject배열의 인덱스표현 변수

// let score = new Array(); //점수가 저장될 배열

// // window.onload=function(){}  이것을 jquery로 하면
// $(function(){
//     // document.getElementById("subject")
//     $("#subject").text(subject[idx]);
// });

// function save(){
//     score.push( Number($("#score").val()));
//     if(idx == subject.length-1){  // if문을 종료하기 위하여 idx와 length-1을 비교
//         //document.grtElementById("resualt").innerHTML
//         // var total=0;
//         // for(val i=0; i<score.length; i++)   데이터의 수가 많으면 for문을 적용하여 총점을 구한다.
//         //   total += score[i]; -> total = total + score[i]와 같다. 

//         var total = score[0]+score[1]+score[2]+score[3]
//         var avg = total/score.length;  // 평균은 총점/데이터 수

//         var out="<ul>";
//         for(var i=0; i<subject.length; i++){
//             out += "<li>"+subject[i]+" : "+score[i]+"</li>";

//         }
//         out+="</ul>";
//         out+="총점 : "+total+"점 평균 : "+avg+"점";


//         $("#result").html(out); //html로 해야 <ul>과 <li>를 태그로 인식한다.
//     }
//     $("#subject").text(subject[++idx]);  // 과목의 이름이 변경되도록 하는 코드
//     $("#score").val(""); //input 태그의 value 비우기
//     $("#score").focus(); // input 태그에 커서표시
// }

// 5명의 사람들이 있다
// 5명이 놀다가 문득 궁금해졌다
//우리들의 평균키는 얼마일까
//이사람들의 궁금증을 해결해주새요!!!~~~
//member = ["김유신", "김민숙","송재열","남기정","서종순"]
// me
// const member = ["김유신","김민숙","송재열","남기정","서종순"]
// let idx = 0
// let height = new Array();

// $(function(){
//     $("#member").text(member[idx]);
// });

// function save(){
//     height.push(Number($("#height").val()));
//     if(idx==member.length-1){
//         var total = height[0]+height[1]+height[2]+height[3]+height[4]
//         var avg = total/height.length;
//         var out ="<ul>";
//         for(var i=0; i<member.length; i++){
//             out += "<li>"+member[i]+" : "+height[i]+"</li>";
//         }
//         out+="<ul>";
//         out+="평균키 : "+avg+" cm "
//         $("#result").html(out);
//     }
//     $("#member").text(member[++idx]);
//     $("#height").val("");
//     $("#height").focus();
// }

// teacher
const member = ["김유신","김민숙","송재열","남기정","서종순"]
let idx=0; //member 배열의 인덱스
let total=0; //전체키의합
let tall=new Array();// 키 저장배열
let avg_below=new Array(); //평균키보다 작은 사람들이 누구냐?

$(function(){
    $("#name").text(member[idx]);
});
function enroll(){
    tall.push(Number($("#tall").val()));
    total += tall[idx];
    if(idx = member.length-1){
        var avg = total/member.length;

        var out = "<ul>";
        for(var i=0; i<tall.length; i++){
            out += "<li>"+member[i]+" "+tall[i]+"cm</li>";

            if(tall[i]<avg)
            avg_below.push(member[i]);
        }
        out += "</ul>";
        out += "평균키 : "+avg+"cm";
        out += "<div> 평균키 미만 "+ avg_below+"</div>";
        $("#result").html(out);
    }
    $("#name").taxt(member[++idx]);
    $("#tall").val("");
    $("#tall").focus();
}




