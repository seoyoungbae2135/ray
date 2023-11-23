// script_game.html link

let board= new Array();

//중복없이 25개 숫자 저장하기
for(var i=1; i<=25; i++){
    var tmp = Math.floor(Math.random()*100)+1;
    if(board.indexOf(tmp) == -1)
        board.push(tmp);
    else
        i--;  // 중복된 숫자가 나올때마다 i값에서 -1을 한다. 그래야 25개 랜덤숫자가 모두 채워진다
}

$(function(){

    $.each( board , function(i,v){  // i-인덱스, v-배열값(데이터값) i,v는 변수이다.
        $(".numBox").eq(i).text(v);
    });
    // 위의 jquery를 for문을 쓰면 아래와 같다  $.each( board , function(i,v){}
    //for(var i=0; i<board.length i++)
    //      var v=board[i]
    $(".numBox").on("click",function(){
        $(this).css("background","black");
        $(this).css("color","white");
        var idx = $(".numBox").index(this);   // 클릭을 하면 인덱스의 값을 idx에 저장
        board[idx]=0;  // board의 인덱스값이 0으로 변경
        alert(board);
        endgame();
    });

});

function endgame(){

}
