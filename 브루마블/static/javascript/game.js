//전역변수
const dice_img=["dice1.png", "dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
let turn=1; //현재 플레이어 순서
let dice1=[0,0], dice2=[0,0]; //주사위 setInterval값 저장변수




//함수정의
function rolling(obj){ //주사위 생성된뒤 버튼을 클릭하면 주사위가
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
        $("#dice1").attr("src","./static/image/"+dice_img[ dice2[1]]);
        
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

    //플레이어 위치변경
    if( gamer.location+dice_sum > 31 ){  //주사위 값이 이동할 위치가 대전위치를 넘는다면
        var diff=(gamer.location+dice_sum) - 31;
        gamer.location = diff-1;
    }else{
        gamer.location = gamer.location + dice_sum;
    }

    //말 위치변경, 이전위치에서는 제거
    var old_zone = find_location(old_location);  //이동전 말위치 찾기
    $(".zone").eq(old_zone).children(".m"+turn).remove();


    var zone_location = find_location(gamer.location); //이동할 위치의 말찾기
    var tag=`
                <div class='meeple m${gamer.num}' data-pn='${gamer.num}'
                style='color:${gamer.color};'>
                    <i class="fa-solid fa-truck-pickup"></i>
                </div>
            `;
    $(".zone").eq(zone_location).append(tag);  // 말의 위치를 이동
    overlap(zone_location);  //같은곳에 말이 겹치지않도록 overlap 함수적용

    //이동한 위치에 땅에서 할일
    game_todo(zone_location);

    // 다음플레이어 턴 넘기기
    if( turn == player_list.length )
        turn=1;
    else
        turn++;

}

function game_todo( location){
    //location매개변수는 zone클래스들중 몇번째zone클래스인지 인덱스값 있음
    //locarion의값은 몇번째zone클래스인지 알수도있지만 , zone배열의
    //구역객체의 인덱스로도 사용가능

    var city = zone[location];
    var gamer = player_list[turn-1];

    if(city.purchase == 0){  //매입금이 0인곳
        // 16-복지기금, 24-공항, 28-기금납부, 8-무인도, 0-출발지
        city.func(gamer);

    }else if(city.owner == ''){
        if(confirm(`${city.name}의 매입가는 ${city.purchase}만원 입니다. \n매입하시겠습니까?`)){
            city.owner=turn;
            gamer.money -= city.purchase; //토지금액만큼 차감
            $("#pm"+turn).text(gamer.money+"만원"); //변경된 플레이어금액 표시

            $(".zone").eq(location).children(".zone_name").
                css("background",gamer.color); //플레이어색으로 변경

        }
    }else{  //도시의 주인이 있는경우 도시의주인에게 토지매입금액만큼 통행료지불
        var owner = city.owner;
        var tollfee = city.purchase; //통행료
        gamer.money -= tollfee;
        player_list[owner-1].money

        $("#pm"+owner).text(player_list[owner-1].money+"만원");
        $("#pm"+turn).text(gamer.money+"만원");
        alert(`${city.name} 소유주에게 ${tollfee}만원 지불했습니다.`);
    }
}