// memo.html link

//생성자 함수
function memo( num, content, importance ){  //작성된 메모저장 객체
    this.num = num;
    this.content = content;
    this.importance = importance;
}
memo.prototype.create= function(i){
    return `<div class='memoItem'>
            <b>${this.num}</b>
            <h3>${this.content}</h3>
            <div style='width=70px; background:${this.importance.color}'>${this.importance.text}</div>
            <div class='del' onclick='del_memo(${i})'><i class="bi bi-trash3"></i></div></div>`
}

function importStyle(text, color){ //메모의 중요도 스타일 객체
    this.text = text;
    this.color = color;
}

// 전역변수 - 함수, 객체메서드, 제어문 등 어느곳에서도 사용가능한 변수
const memo_list = new Array(); //메모객체가 저장될 배열
    //배열앞에 타입으로 const를 붙여주면 배열안에 데이터는 변경가능하지만 
    //다른 배열로 변경할 수 없다.
const import_list = new Array(); //중요도 스타일 객체 저장배열
let num = 1; //메모번호


//초기화 - document객체가 모두 로드되면 실행할 초기작업
            //document객체 로드 - window.onload를 뜻함.
$(function(){
    $("#save").on("click",save); //등록버튼 클릭시 동작
    
    //option태그에 사용할 텍스트를 위해 importStyle객체를 먼저 생성한다
    import_list.push( new importStyle("매우중요", "red"));  // import_list에는 importStyle("text", "color") 라는 객체가 들어있다
    import_list.push( new importStyle("중요", "orange"));
    import_list.push( new importStyle("보통", "green"));
    import_list.push( new importStyle("낮음", "yellow"));
    import_list.push( new importStyle("매우낮음", "white"));

    // importStyle객체를 option태그에 넣어 select추가
    // $.each(배열, function( i, v){})  i: 배열의 인덱스 저장 , v:배열의값 (매개변수)
    $.each( import_list, function( i, v ){   // for문의 jquery $.each  
        $("#import").append($("<option>").attr("value", i).text(v.text))  //option태그에 import_list의
        //$("#import") : id가 import인 태그선택
        // .append() : 태그의 자식으로 추가하기
        // $("<option>") : option태그 생성
        // .attr("value", i) : 태그에 value속성을 i값으로 지정하기
        // .text(v.text) : 태그에 텍스트를 v객체에 text키의 value로 넣기  
    });

});

function save(){  //등록버튼을 클릭하면 동작하는 함수
    // 함수의 기능 :작성한 메모와 중요도를 화면에 출력하는 기능
    var text = $("#memo").val(); //id가 memo인 input 태그에 작성한값 가져오기
    var 중요도 = $("#import").val(); //id가 import인 select태그에서 선택한 option 값
                //($("#import option:selected").val()); 이렇게 해도 동일

    memo_list.push( new memo( num, text, import_list[중요도] )); //객체를 다른객체에 넣은 것

    var last = memo_list.length-1; 
       // memo_list 배열에 memo객체를 저장후  저장된 memo객체의 인덱스 구하기

       // append - 태그의 마지막에 추가 (자식)
       // after - 현재 선택한 태그뒤에 추가 (형제)
       // prepend - 태그의 자식으로 앞에 추가 (자식)
       // before - 현재 선택한 태그 앞에 추가 (형제)
    $(".memoList").prepend( memo_list[last].create( num ) );
    num++;

    // 삭제 아이콘 클릭기능 적용
    // $(".del").on("click", del_memo);
    // var dl = document.getElementsByClassName("del");
    // console.log(text+" ",+중요도);

}

// 삭제부분은 jquery의 문제점으로 javascript로 작성
let f=true;
function del_memo( n ){

    for( var i in memo_list){ //memo객체 저장된 배열 전체 조회
        if(n === memo_list[i].num){ //삭제할 번호와 일치하는 memo객체찾기
            memo_list.splice(i, 1); //배열에서 삭제
        }
    }

    $(".memoList").empty(); //목록태그 전체 비우기
    for ( var v of memo_list){  // memo_list 배열에 있는 memo객체 다시출력
        $(".memoList").prepend( v.create( v.num ));
    }
        



       //parent() : 바로위의 부모 태그가져오기
       //parents() : 위에있는 모든 부모 태그들
       //var parent = div.parent();
        //empty() : 선택한 태그안에 전부를 비우기
        //remove() : 선택한 태그안에 전부를 삭제하고 자기자신도 삭제된다
        //unwrap() ; 선택한 태그의 부모를 삭제
        //parent.empty()
        //parent.remove()
        //parent.remove()

}

/*
    2023-12-07 과제
    맵 만들어 오기 : 다음주 화요일 까지
    가로 7칸 세로7칸 의 정사각형 블루마블판 만들기
    중앙에 이미지 넣기
    대한민국 과 일본 도시이름으로 칸을 채워주세요
    각면의 색 넣기
    모서리에 이미지 넣기
*/

    // 태그와 문자열를 추가하는 방법 (javascript로하는 정석적인 처리방법)
    //var select = document.getElementById("import");
    //var opt = document.createElement("option")  //도큐먼트 아래에 새로운 option 태그를 만들어라
    //var text = document.createTextNode("매우중요") // 새로운 text를 만들어라
    //opt.appendChild(text); //option 에 자식태그로 text를 넣어라
    //select.appendChild(opt); // select에 자식태그로 option을 넣어라 
    //새로운 html 태그생성 - document.createElement("태그이름")
    // text 생성 - .createTextNode("텍스트")
    //태그의 속성 추가 - 태그.setAttribute("id", "myname"); -> 태그에 id를 넣어준다
    // 태그의속성 가져오기 - 태그. getAttribute("id", "myname") - 태그의 id를 가져온다
// 이것을 jquery로하면
    // createElement("div") -> $("div") 
    // createTextNode("아하") -> .text("아하")
    // .appendChild(태그또는 텍스트) -> .append(태그또는 텍스트)
    // setAttribute("id", "aa") -> .attr("id") 
    // getAttribute("id", "aa") -> .attr("id")