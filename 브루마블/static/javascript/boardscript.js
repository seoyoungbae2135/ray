// json 적용하기전 javascript로만 실행한 코드  function change_pcl(){} 내용 전까지 작성됨.
// 실행하려면 bluemable.html 파일에 board.js link파일을 본파일로 변경 필요

const zone_name=[ //보드판 구역의 이름을 배열로 저장
    "복지기금","화성","성남","창원","제주","용인","수원","울산",
    "인천공항","청주","광주","부천","대구","남양주","인천","포항",
    "복지기금납부","천안","부산","전주","서울","안산","대전",
    "무인도","안양","김해","평택","시흥","파주","의정부","김포","출발"
]; 
const zone_color=["#ff2424","#53c14b","#ffbb00","#121212"] // 각면의색상
const land_purchase=[    //각도시의 매입가격 (만단위) 
    0, 25, 27, 26, 34, 28, 27, 39,
    0, 16, 42, 20, 45, 19, 48, 27,
    0, 21, 52, 20, 80, 22, 120, 
    0, 12, 10, 15, 12, 9, 9, 7, 0
];

const bg_image=[  // 모서리구역의 배경 이미지
    "start.png", "island.png", "fund.png", "travel.png"
];

//각 구역의 객체 생성자 함수
// 구역이름, 토지매입가격, 소유자, 색상, 기능(모서리 부분), 이미지
function zone_Object( name, purchase, owner, color, func, image){
    this.name=name;
    this.purchase=purchase;
    this.owner=owner;
    this.color=color;
    this.func=func;
    this.back=image;
}
//플레이어 생성자 함수
function player(num, color){
    this.num=num;
    this.color=color;
    this.money=100;  //초기게임머니 100만원
    this.zone=new Array(); //매입한 토지를 배열로 저장
    this.drift_turn=0; //무인도에 남은 턴
    this.location=0; //현재위치
} 
//전역변수
let fund = 0;//사회복지기금 모금금액 저장변수
let island_ = new Array(); //무인도에 도착한 플레이어
let zone = new Array(); //각 구역의 객체저장 배열
let player_list = new Array();//게임 참가자 

함수정의
function zone_create(){
    for( var i=0; i< zone_name.length; i++){
        var color = zone_color[0];
        if( i>=0 & i<=7)
            color = zone_color[2];
        if( (i>=8 & i<=23) & i%2==0)
            color = zone_color[3];
        if( (i>=8 & i<=23) & i%2==1)
            color = zone_color[1]
        
        var image = "";
        if( i == 0) image = bg_image[2];
        if( i== 8) image = bg_image[3];
        if( i== 23) image = bg_image[1];
        if( i== 31) image = bg_image[0]; 

        zone.push( new zone_Object(
            zone_name[i], land_purchase[i], "", color, "", image
        ));
    }
    console.log( JSON.stringify(zone)); // json 파일을 만들기 위한 코드, 개발자 도구에 console에 객체가 모두 나열됨 이것을 cuty.json파일에 붙여넣기함
}

//구역객체들을 zone 클래스 div에 적용하기
function zone_draw(){
    $.each(zone, function( idx, obj){
        if(idx == 0 || idx==8 || idx==23 || idx==31 ){
            $(".zone").eq(idx).css("background-image", "url( ./static/image/" +obj.back+")");
            $(".zone").eq(idx).css("background-size","cover");
            $(".zone").eq(idx).css("background-position","center");
        }else{
            $(".zone").eq(idx).children(".zone_name").text( obj.name);
            $(".zone").eq(idx).children(".zone_color").css("background-color", obj.color);
        }
    });
}
function game_init(){
    var pc = Number( $("#player_number").val());

        $("#game_state").html("<h3>게임현황</h3>");

        for(var i=1; i<=pc; i++){
            player_list.push( new player(i, "#ff0000"));
            $("#game_state").append(
                `<div class='ps'>
                    <b class='pnum'>${i}</b>
                    <input type='color' id='pcl${i}' value='${player_list[i-1].color}'>
                    <div class='steate'>
                        자금 : <b id='pm${i}'>${player_list[i-1].money}만원</b>
                        보유도시 : <b id='pcity${i}'>${player_list[i-1].zone.length}개</b> 
                    </div>
                </div>`
            );
        }
       
        $("#game_state").show();
        $("#set_player").hide();
}
function change_pcl(){

}

$(function(){
   
    zone_create();    
      

    $("#enroll").on("click", game_init );
    $("#player_number").on("change", function(){
        $(this).next().text($(this).val() + "명");
    } );
    $("#player_number + label").text(2+"명");

    $("input[type=color]").on("change", change_pcl);
});

//과제  - 각 구역의 객체를 json으로 작성해오세요
// city.json 으로
// zone_Object 생성자 함수로 생성한 객체들을 
//zone_creator 없이 동작 가능할 것 
        