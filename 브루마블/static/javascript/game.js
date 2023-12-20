/*
    function rolling(obj); 주사위 굴리기위한함수 -게임진행
        매개변수 - obj : 주사위 굴리기버튼태그
    function stop(obj) ; 주사위멈추게하는함수 - 게임진행
        매개변수 - obj : 주사위 멈추기버튼태그
    function meeple_move(); 플레이어말을 주사위값에따라 이동시키는함수 - 겡미진행
    function 다음턴(who); 다음차례가누구인지 정해주는 함수 -게임진행
        매개변수 - who :현재턴 플레이어번호
    function 말위치변경(gamer, old_location); 말이이동할 경우 이전의치와 현재위치 - 게임진행
        매개변수 - gamer : 현재 플레이어객체
                  old_location : 현재플레이어의 주사위 값에따라 이동하기전의위치
    function game_todo( location, gamer);각 구역에 도착시 해야할 일 - 게임진행
        매개변수 - location : 말이 도착한 위치(div.zone)
                    gamer : 현재턴 플레이어 객체 
    function 파산처리(gamer) 돈이0이되면 파산처리함수 - 게임진행
        매개변수 - ganer : 현재턴 플레이어 객체
    function airport_move(); 인천공항에 도착한 플레이어가 선택한 위치로 이동하는 함수-게임진행

rolling -> stop -> meeple_move -> 말위치변경 -> game_todo ->

*/



//전역변수
const dice_img=["dice1.png", "dice2.png","dice3.png","dice4.png",
                "dice5.png","dice6.png"] //주사위이미지배열
let turn=1; //현재 플레이어 순서
let dice1=[0,0], dice2=[0,0]; //주사위 setInterval값 저장변수




//함수정의
function rolling(obj){ //주사위 생성된뒤 버튼을 클릭하면 주사위의
    // 이미지가 변경되는 함수, obj는 버튼태그객체를 전달받는 변수
    $(obj).text("멈춰!");
    $(obj).attr("onclick","stop(this)");

    //주사위 돌리기
    var setTime=100;
    dice1[0] = setInterval( function(){

        dice1[1] = Math.floor(Math.random()*6);
        $("#dice1").attr("src","./static/image/"+dice_img[ dice1[1]]);

    } ,setTime);
    dice2[0] = setInterval( function(){
        dice2[1] = Math.floor(Math.random()*6);
        $("#dice2").attr("src","./static/image/"+dice_img[ dice2[1]]);
        
    } ,setTime);
}
function stop(obj){
    $(obj).text("굴리기");
    $(obj).attr("onclick","rolling(this)");

    clearInterval(dice1[0]);
    clearInterval(dice2[0]);

    meeple_move();
}

function meeple_move(){ //주사위 값에 따라 말 움직이기
    var gamer = player_list[turn-1]
    var dice_sum = dice1[1] + dice2[1]+2;
    var old_location = gamer.location; //현재위치(이동전);

    //주사위값에 따라서 플레이어 위치변경
    if( gamer.location+dice_sum > 31 ){  //주사위 값이 이동할 위치가 대전위치를 넘는다면
        var diff=(gamer.location+dice_sum) - 31;
        gamer.location = diff-1;
        zone[31].func(gamer); //출발지통과하거나 도착하면 실행함수, zone클래스중 31번째가 출발지 div이다
    }else{
        gamer.location = gamer.location + dice_sum;
    }

    말위치변경(gamer, old_location);// 말위치변경 함수 

    //이동한 위치에 땅에서 할일
    game_todo(find_location(gamer.location) , gamer);

    // 다음플레이어 턴 넘기기
    turn = 다음턴(turn);  //재귀함수를 쓰기위한 코드

    //최종승자
    var win = 0 ,c=0 ;
    for(var i=0; i<player_list.length; i++){
        t+=player_list[i].zone;
        if(b < player_list[i].zone)
        if( !player_list[i].파산){ 
            
            c++;
            win=player_list[i];
        }
    }

    if(c==1){
        alert(`승자는 ${win.num}플레이어, 총자금:${win.money}, 보유도시:${win.zone}`);
    }else{}
    $.each(zone,function(i,v){

    })
    
    $(".pcity").css("background","");
    $("#pcity"+turn).css("background","white")

}

function 다음턴(who){
    if(who=player_list.length)
        who=0;
    if( island_.includes( who+1 ) ){
        player_list[who].drift_turn--;
        if( player_list[who].drift_turn == 0){ //무인도에 남은턴이0이면 island배열에서 제거
            island_.splice(island_.indexOf(who+1),1);
        }
        return 다음턴(who+1);
    }


    if( player_list[who].파산)
        return 다음턴(who+1);  // 재귀호출(재귀함수)  자기가 자신을 실행시키는 함수, 반복문으로 표현이 힘든것을 실행, 이전에 실행했던 함수를 가져올수 있다
                        // 파산인경우 실행
    return who+1  // 파산이 아닌경우 실행
    

}

function 말위치변경(gamer, old_location){
    //말 위치변경, 이전위치에서는 제거
    var old_zone = find_location(old_location);  //이동전 말위치 찾기
    $(".zone").eq(old_zone).children(".m"+gamer.num).remove();
    
    
    var zone_location = find_location(gamer.location); //이동할 위치의 말찾기
    var tag=`
            <div class='meeple m${gamer.num}' data-pn='${gamer.num}'
                style='color:${gamer.color};'>
                    <i class="fa-solid fa-truck-pickup"></i>
            </div>
        `;
    $(".zone").eq(zone_location).append(tag);  // 말의 위치를 이동
    overlap(zone_location);  //같은곳에 말이 겹치지않도록 overlap 함수적용
    
}

function game_todo( location , gamer){ //해당구역에 도착하면 해야하는 내용 실행함수
    //location매개변수는 zone클래스들중 몇번째zone클래스인지 인덱스값 있음
    //locarion의값은 몇번째zone클래스인지 알수도있지만 , zone배열의
    //구역객체의 인덱스로도 사용가능

    var city = zone[location]; // 도착한곳 데이터
    
    if(city.purchase == 0){  //매입금이 0인곳
        // 16-복지기금, 24-공항, 28-기금납부, 8-무인도, 0-출발지
        if(city.num != 0) //출발지 도착에 대해서는 meeple_move에서 구현했다
        city.func(gamer);

    }else if(city.owner == ''){ // 도시의 주인이 없는경우
        if(confirm(`${city.name}의 매입가는 ${city.purchase}만원 입니다. \n매입하시겠습니까?`)){
            if( gamer.money < city.purchase){ //토지맹비가보다 플레이어자금이 적으면
                alert("자금이부족합니다");
                return; //이후 실행 없음
            }
            city.owner=gamer.num;
            gamer.money -= city.purchase; //토지금액만큼 차감
            $("#pm"+gamer.num).text(gamer.money+"만원"); //변경된 플레이어금액 표시

            $(".zone").eq(location).children(".zone_name").
                css("background",gamer.color); //플레이어색으로 변경
            gamer.zone++;
            $("#pcity"+gamer.num).text(gamer.zone+"개");
                
        }
    }else{  //도시의 주인이 있는경우 도시의주인에게 토지매입금액만큼 통행료지불
        var owner = city.owner;
        var tollfee = city.purchase; //통행료
        if( gamer.money < tollfee ){ //플레이어자금이 통행료보다 작다면
            player_list[owner-1].money += gamer.money; //플레이어가 보유한 금액만큼만 보유자에게 지불
            gamer.money=0;  // 플레이어의 자금은 0원
            gamer.파산=ture; //자금이부족하여파산
            파산처리(gamer); // 파산된 플레이어의 토지를 점부 매각과토지색상제거 말제거
        }else{
        gamer.money -= tollfee; //통행료지불되는 코드
        player_list[owner-1].money
        }

        $("#pm"+owner).text(player_list[owner-1].money+"만원");
        $("#pm"+gamer.num).text(gamer.money+"만원");
        alert(`${city.name} 소유주에게 ${tollfee}만원 지불했습니다.`);
    }
}

function 파산처리(gamer){ //자금부족으로 파산된 플레이어처리
    //소유한 토지 전부 owner 초기화, 소유한 토지 배경색 제거
    $.each(zone, function(idx, city){
        if(city.owner == gamer.num){
            city.owner=''; //소유주 초기화
            var zl = find_location( city.num );
            $(".zone").eq(zl).children(".zone_name").css("background","");//배경색제거

        }
    });

    //말제거
    var zl = find_location(gamer.location); //파산한 게이머의 위치를 찾아
    $(".zone").eq(zl).children(".m"+gamer.num).remove(); // 말을 제거

}

function airport_mave(){
    if($(this).hasClass("center")) return; //보드의 가운데 클릭시 아무것도 안함.

    if(탑승객 !=0 ){ //탑승객 변수에 0이 있다면 현재 이용할 수있는 플레이어가 없다
        
        //meeple_move에서 turn이 변경되기때문에 공항에 도착한
        //플레이어가 위치를 선택하고 turn이 변경되어야 한다.
        //공항에 도착한 플레이어를 표현하기위해 turn을 -1을 해준다.
        
        var 클릭한도시 =$(this);
        var 클릭한도시번호 = $(this).data("num");//this에 있는 데이터 num을 클릭한도시번호 변수에저장
        if(클릭한도시번호 == 24){ //24는 공항 num 이다.
            return; //공항을 클릭하면 아무것도 하지않는다.
        }
        var gamer = player_list[탐승객-1];
        var old_location = gamar.location;
        gamer.location = 클릭한도시번호;

        //출발지를 클릭했냐? 출발지를 통과하냐?
        if( 클릭한도시번호 >= 0 && 틀릭한도시번호 < 24)
            zone[31].func(gamer);

        말위치변경(gamer, old_location);
        
        var zone_location = find_location( 클릭한도시번호 );
        game_todo(zone_location , gamer); //클릭한 위치에서 할일 실행(맹비,기금,무인도,출발지등)
        탐승객=0;
    }
}