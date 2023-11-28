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

    $(".modal_bg").on("click",function(){
        $("#result_modal").hide();
    });

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
        
        //alert(board);
        endgame();
    });

});

function endgame(){
    // me
    // let num1 = new Array();
    // num1.push(board.substring(0,5));
    // console.log(num1);

    // if(board[0]==0 && board[1]==0 && board[2]==0 && board[3]==0 && board[4]==0){
    //     console.log("bingo")
    // }
    // if(board[5]==0 && board[6]==0 && board[7]==0 && board[8]==0 && board[9]==0){
    //     console.log("bingo")
    // }
    // if(board[10]==0 && board[11]==0 && board[12]==0 && board[13]==0 && board[14]==0){
    //     console.log("bingo")
    // }   
    //for(var i=0; i<=board. )
    // if(board[0]==0){
    //     var num1 = 1;
    // }
    // if(board[1]==0){
    //     var num2 = 1;
    // }
    // if(board[2]==0){
    //     var num3 = 1;
    // }
    // if(board[3]==0){
    //     var num4 = 1;
    // }
    // if(board[4]==0){
    //     var num5 = 1;
    // }
    // if(num1+num2+num3+num4+num5 == 5){
    //     console.log("bingo");
        // num1=a, num2=0, num3=0, num4=0, num5=0;
        //console.log(num1);
    // }
    // if(board[5]==0){
    //     var num6 = 10;
    // }
    // if(board[6]==0){
    //     var num7 = 10;
    // }
    // if(board[7]==0){
    //     var num8 = 10;
    // }
    // if(board[8]==0){
    //     var num9 = 10;
    // }
    // if(board[9]==0){
    //     var num10 = 10;
    // }
    // if(num6+num7+num8+num9+num10 == 50){
    //     console.log("bingo");
    //  }
    // if(board[10]==0){
    //     var num11 = 100;
    // }
    // if(board[11]==0){
    //     var num12 = 100;
    // }
    // if(board[12]==0){
    //     var num13 = 100;
    // }
    // if(board[13]==0){
    //     var num14 = 100;
    // }
    // if(board[14]==0){
    //     var num15 = 100;
    // }
    // if(num11+num12+num13+num14+num15 == 500){
    //     console.log("bingo");
    // }
    // if(board[15]==0){
    //     var num16 = 1000;
    // }
    // if(board[16]==0){
    //     var num17 = 1000;
    // }
    // if(board[17]==0){
    //     var num18 = 1000;
    // }
    // if(board[18]==0){
    //     var num19 = 1000;
    // }
    // if(board[19]==0){
    //     var num20 = 1000;
    // }
    // if(num16+num17+num18+num19+num20 == 5000){
    //     console.log("bingo");
    // }
    // if(board[20]==0){
    //     var num21 = 1;
    // }
    // if(board[21]==0){
    //     var num22 = 1;
    // }
    // if(board[22]==0){
    //     var num23 = 1;
    // }
    // if(board[23]==0){
    //     var num24 = 1;
    // }
    // if(board[24]==0){
    //     var num25 = 1;
    // }
    // if(num21+num22+num23+num24+num25 == 5){
    //     console.log("bingo");
    // }
    // if(num1+num6+num11+num16+num21 == 5){
    //     console.log("bingo");
    // }
    // if(num2+num7+num12+num17+num22 == 5){
    //     console.log("bingo");
    // }
    // if(num3+num8+num13+num18+num23 == 5){
    //     console.log("bingo");
    // }
    // if(num4+num9+num14+num19+num24 == 5){
    //     console.log("bingo");
    // }
    // if(num5+num10+num15+num20+num25 == 5){
    //     console.log("bingo");
    // }
    // if(num1+num7+num13+num19+num25 == 5){
    //     console.log("bingo");
    // }
    // if(num5+num9+num13+num17+num21 == 5){
    //     console.log("bingo");
    // }

    // 2023.11.23 homework teacher
        var row=0, col=0, end=0, cross=[0,0];
        for(var i=0; i<5; i++ ){  //빙고 확인하기
            for(var k=0; k<5; k++){
                if(board[i*5+k]==0) row++; // 가로방향 5줄 전부확인
                if(board[k*5+i]==0) col++; // 세로방향 5열 전부확인
            }
            if(board[i*6]==0) cross[0]++; // 왼->오 대각선
            if(board[(i+1)*4]==0) cross[1]++; // 오->왼 대각선
            if(cross[1]==5)end++;
            if(cross[0]==5) end++;
            if(row==5) end++;
            if(col==5) end++;

            row=0; // 한줄씩 확인 할 때 마다 0개부터 확인해야하므로 초기화
            col=0; // 한열씩 확인 할 때 마다 0개부터 확인해야하므로 초기화
        }

        if (end==5){
            $("#result_modal").show(); // $("#result_modal".css(display))
            $(".result").text("5줄 빙고 완성");
        }else if(end>=6){ //빙고실패
            $("#result_modal").show();
            $(".result").text("빙고실패");

        }

}
