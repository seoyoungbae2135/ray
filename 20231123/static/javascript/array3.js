// script_array3.html link
const store = ["슈펜","니꼴밀러","피에르가르뎅","엘칸토",
"미쏘","치크","뉴발란스","애슐리","자연별곡","코코몽키즈랜드"];

const floor = [1, 1, 1, 4, 3, 5, 2, 7, 8, 10];
const zone = ["D","B","C","A","D","A","C","A","A","A"];

//store - 매장명, floor - 층수, zone - 층별 구역

//매장명을 입력하면 매장의 위치를 출력

// 엔터누르면 입력이 되도록 하는 코드

$(function(){
    // dicument.getElementById("store") 
    // keydown(key 눌렀을때), keyup(key 놓았을때), keypress(key 누르고있는 상태) : keyboard 이벤트종류는 이 3가지
    $("#store").keyup(function(key){  
        if( key.keyCode==13)  // 엔터 키코드 13, 엔터가 입력되면 
            store_search();   // 검색을 실행 
    })
});

function store_search(){
    var brand = $("#store").val(); // input에 입력한 브랜드명 가져오기
    //배열에서 데이터 존재유무 확인
    var idx = store.indexOf(brand);   // indexOf라는 함수로 아래와 같은 for문을 간단하게 만들 수 있다
    if(idx == -1)      // 데이터에 없는 값이 입력되었을때 처리하는 if 문
        $("#result").text("존재하지않는 브랜드 입니다.");
    else{
        var res =`<b>${floor[idx]}</b>층 , ${zone[idx]}구역`;
        res +=`<h3>${floor[idx]}층 매장</h3>`; // 동일층에 있는매장을 같이 출력

        let same_floor = new Array();  // 동일층 매장을 저장
        for( var i=0; i<floor.length; i++){
            if(floor[i] == floor[idx] && i != idx){  
                same_floor.push(store[i]);
            }
        }
        res += same_floor;

        $("#result").html(res);
    }

    // for(var i=0; i<store.length; i++){
    //     if(store[i].indexOf(brand)==brand) // 일부 브랜드명만 같아도 검색하는 코드
    //     alert("찾았다"+i+"번째인덱스");
    // }

}