// script_array4.html link
const movie_name = ["서울의봄","프레디의피자가계","사채소년",
"헝거게임","더와일드","더마블스","30일","나폴레옹","빅슬립"];

const grade =[8.7,7.3,7.3,6.7,8.2,3.9,6.9,9.6,9.0];

const nation =["한국","미국","한국","미국","미국","미국","한국",
"영국","한국"]

let movie = [movie_name, grade, nation]  // 2차원 배열
    movie[2][4] // 미국 추출


// 영화 제목을 검색하여 평점(grade)과 국가(nation)를 출력하세요 
//me
// $(function(){
//     $("#movie").keyup(function(key){
//         if(key.keyCode == 13)
//             movie_search();
//     })
// });

// function movie_search(){
//     var title = $("#movie").val();
//     var idx = movie_name.indexOf(title);
//     if(idx == -1)
//         $("#result").text("존재하지않는 영화제목입니다");
//     else{
//         var point = `<b>평점 : ${grade[idx]}점</b> , 국가 : ${nation[idx]}`
//     }
//     $("#result").html(point);
// }

// teacher

// function search(){
//     var movie = $("#movie").val().replace(/\s/g,""); // 검색창에 띄어쓰기를 해도 검색 할 수 있도록 replace
//     var idx = movie_name.indexOf(movie);
//     if( idx==-1)
//         $("#result").txt("없는 영화 입니다.");
//     else{
//         $("#result").text(`평점 : ${grade[idx]}, 국가 : ${nation[idx]}`);
//     }
// }


//  다차원배열 - 1차원배열과 1차원 배열들을 연결하여 만들어지는 배열
//      여러개의 1차원 배열들이 존재하는 배열

let num = [[1,2,3],[4,5,6],[11,22,33,44]]; // 2차원배열 배열안에 배열을 또 만든다

alert(num[1][1]); //5를 추출
alert(num[2][2]); //33을 추출

//2차원 배열은 인덱스가 2개이기때문에 반복문도 2번 사용된다.

for(var i=0; i<num.length; i++){
    for(var k=0; k<num[i].length; k++){
        document.write(num[i][k]+" " );
    }
}


    
