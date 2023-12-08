// 객체, json
//전역변수
let name=""; //입력한 이름 저장
let age=""; //입력한 나이저장

let list=[]; // 입력값을 계속저장하기위하여 배열변수 생성

let info={  // let info={ name:이순신, job:군인, 활동지:여수 } // 객체가 만들어짐 {}가 객체하나, 여러개만들시 배열[ {} ]안에 중괄호 사용 
    100:{ name:"이순신", job:"군인", 활동지:"여수"}, // 이와같이 info{}객체안에 100 객체 101객체 등 여러개의 객체를 담는다. 
    101:{ name:"김유신", job:"군인", 활동지:"경주"},  //info는 100,101,102,103만 접근할 수있다
    102:{ name:"장보고", job:"군인", 활동지:"진도"},
    103:{ name:"문익점", job:"산업스파이", 활동지:"원나라"}
}
/*
    a[ {c:"가", d:"나"} , {c:"다", d:"라"}];
    a[0].c => 가 를 호출
    a[1].d => 라 를 호출

    f={ a:{c:"가", d:"나"} , b:{c:"다", d:"라"} };
    f.a.c => 가 를 호출
    f[a].c => 동일하게 가 를 호출
*/


//html태그 로드
$(function(){
    
});

function list_print(){ //객체에 저장된 value(데이터)를 출력하는 함수
    // 객체의key만 추출하는 방법 - Object()를 통해 모든 객체를 만든다
        // Object.keys(객체명)
    // 객체의 avlue만 추출하는방법 -Object.values(객체명)
    // Object.keys(), Object.values() 의 결과는 배열에 저장된다. 
    let info_keys = Object.keys( info ); // 

    for( var key of info_keys){ // key변수에는 info 객체의 key가 하나씩 저장
        $("#res").append( info[key].name +" "+ info[key].job +" "+info[key].활동지+"<br>");
    }
    //alert( info_keys);
    //alert( info[101].name) // info에 있는 101 key, 101객체에 있는 name이라는 key 이렇게 2단계로 접근하여 김유신 을 출력한다

}

function save(){ // 저장변수 클릭시 동작할 함수
    name = $("#name").val();
    age = $("#age").val();

    var obj = { 이름:name, 나이:age }; // 객체생성

    $("#res").text(obj.이름 + " "+obj.나이); // res태그에 text로 출력
    list.pust( obj ); //

    var out="";  
    for( var object of list){  // of = 
        out += object.이름 +" "+object.나이+"<br>"; // out 변수에 입력값 계속 저장
    }
    $("#res").html( out); // res태그에 html로 변수 out 출력
}
// console.log(obj.이름+" "+obj.나이);
