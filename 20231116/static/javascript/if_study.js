// javascript_if2.html link
//브라우저에 html태그가 모두 로드(화면표시) 되면 실행되는 스크립트 코드
window.onload=function(){

    // 조건문 - if문, switch문

    // if(a==10){
    //     alert("같다");
    // }else{
    //     alert("같지않다");
    //     break; // 단독 if문 적용불가 반복문에 들어간 if문에는 적용가능
    // }

    // var a=234;
    // switch(a){  //a에 들어있는 변수로 선택하는 것
    //     case 1:  //a에 1이들어있으면 선택
    //         alert("1");
    //         break;  // 코드의 흐름을 중단시킨다.(if문에 사용하지 않는다) 반복문과 switch문에서만 사용한다.
    //     case 1000:
    //         alert("1000");
    //         break;  // break를 적용하지 않으면 하위 코드도 모두 실행된다 
    //     case 234:
    //         alert("234");
    //         break;
    //     case 10:
    //         alert("10 선택");
    // }

    // var alp="t";
    // switch(alp){
    //     case "t":
    //         document.write("table");
    //         break;
    //     case "d":
    //         document.write("dog");
    //         break;
    //     case "a":
    //         document.write("apple");
    //         break;
    // }

    // var airjordan=2;
    // var airmax=97
    // var alp="나이키 에어조던 90 재고"; // swwitch는 문의사항등을 자동으로 답변하는 프로그램으로도 사용할수있다.
    // switch(alp.split(" ")[1]){  // 변수에 있는 문자에서 
    //     case "에어조던":
    //         document.write("현재 재고수량은 "+airjordan+"개");
    //         break;
    //     case "에어맥스":
    //         document.write("현재 재고수량은 "+airmax+"개");
    //         break;
    //     case "a":
    //         document.write("apple");
    //         break;
    //     default:  // 정해진 문자이외의 문자가 입력되면 선택된다.
    //         document.write("죄송합니다");
    // }

    /*   
       if(score >= 90){
       else if(score >= 80){
       else if(score >= 70){} 
       }else{}
       if문으로만들면 이와같이 만들어야하지만 switch를 쓰면 
       아래와 같이 한다.
    */

    // var score = 75;
    // switch(){
    //     case 100: case 99: case 98: case 97: 
    // } 여러개를 구분하여 적용할때 ( 90점 이상은 A, 80점 이상은 B, 70점 이상은 c, 70점 미만은 F 일경우)
            // 아래와같이 계산식을 적용하여 간단히 만든다.
    // switch( parseInt(score/10)){
    //     case 10: case 9:
    //     document.write("A학점"); break;
    //     case 8:
    //         document.write("B학점"); break;
    //     case 7:
    //         document.write("C학점"); break;
    //     default:
    //         document.write("F학점");
    // }


    // 20231116 과제
    // 주차비 정산
        // apple주차장의 주차요금 표
        //  기본 주차비 - 1000원, 기본시간 - 30분
        //  (30분 이내 주차시 1000원, 5분 주차해도 1000원, 39분 까지 1000원)
        //  10분당 100원씩 추가 (40분 주차시 1100원, 54분 주차시 1200원)

        //  2시간 이상 주차시 기본요금 변경
        //      기본요금 - 1500원
        //      (2시간 1분 주차시 - 1500원, 2시간 34분 주차시 - 1800원 )
        //   4시간이상 주차시 기본요금 변경
        //      기본요금 - 2500원
        //   8시간 이상 주차시 요금은 무조건 10000원

        // 주차시간을 분단위로 입력하여 주차요금이 얼마인지 출력하시오.
        // report
    // var time = parseInt(prompt("주차시간입력"));
    // var cost = 1000;
    // var cost2= 1500;
    // var cost4= 2500;
    // var cost8= 10000;
    
    // if((time<120) && (time>30) ){
    //     time = time-30;
    //     var price = parseInt(time/10) * 100;
    //     var pay = price+cost; 
    //     alert(pay+"원");
    // }else if((time<240) && (time>=120) ){
    //     time = time-120;
    //     var price = parseInt(time/10) * 100;
    //     var pay = price+cost2;
    //     alert(pay+"원");
    // }else if((time<480) && (time>=240) ){
    //     time = time-240;
    //     var price = parseInt(time/10) * 100;
    //     var pay = price+cost4;
    //     alert(pay+"원");
    // }else if(time>=480){
    //     var pay = cost8;
    //     alert(pay+"원");
    // }else{
    //     alert(cost+"원")
    // }

    // teacher

    var time = parseInt(prompt("주차시간입력"));
    var cost = 1000;

    if(time >= 480){  // 범위가 큰 것 부터 코드를 작성한다 
        cost=10000; time=0;

    }else if(time >= 240){
        cost=2500; time=time-240;

    }else if(time >= 120){
        cost=1500; time=time-120;

    }else{
        time = time<30 ? 0 : time-30;
    }

    var price = Math.floor(time/10)*100+cost; //Math.floor() 가 소숫점이하를 제외하는 명령, parseInt는
    document.write(`주차요금:${price}원`)




    // 주사위게임 만들기
    // 컴퓨터와 주사위 게임을 한다.
    // 각자 주사위 하나씩 던진다 주사위값이 큰쪽이 이긴다
    // me
    // var com = Math.floor(Math.random()*6)+1;
    // var user = Math.floor(Math.random()*6)+1;

    // if(com==user){
    //     alert("비김"+user+com);
    // }else if(user>com){
    //     alert("이김"+user+com);
    // }else{
    //     alert("패배"+user+com);
    // }
    // // teacher
    // var com = Math.floor(Math.random()*6)+1;
    // var user = Math.floor(Math.random()*6)+1;

    // if(user>com){
    //     alert("승");
    // }else if(user<com){
    //     alert("패");
    // }else{
    //     alert("무");
    // }
        // 주사위게임 만들기
    // 컴퓨터와 주사위 게임을 한다.
    // 각자 주사위 두개씩 던진다 주사위합이 큰쪽이 이긴다
    // 단 두주사위 값이 같은 숫자가 나온 쪽이 이긴다
    // 둘다 같은숫자가 나온다면 합이큰쪽이 이긴다
    // me
    // var com1 = Math.floor(Math.random()*6)+1;
    // var com2 = Math.floor(Math.random()*6)+1;
    // var user1 = Math.floor(Math.random()*6)+1;
    // var user2 = Math.floor(Math.random()*6)+1;
    // var com = com1+com2;
    // var user = user1+user2;
    // var comt = (com1==com2)? com1+com2 : 1;

    // if(com>user){
    //     alert("패"+com+" "+user);
    // }else if(com<user){
    //     alert("승"+com+user)
    // }else{alert("무"+com+user);}

    //    if(comt==usert){
        
    //    }else if(comt>usert){
        
    //    }else{
        
    //    }
    //    if(com<user){
    //     alert("패");
    //    }else if(com<user){
    //     alert("승");
    //    }else{
    //     alert("무");
    //    }
    // }

    // teacher
    // var com1 = Math.floor(Math.random()*6)+1;
    // var com2 = Math.floor(Math.random()*6)+1;
    // var user1 = Math.floor(Math.random()*6)+1;
    // var user2 = Math.floor(Math.random()*6)+1;

    // var user = user1+user2;
    // var com = com1+com2;


    // if(user>com){
    //     if((com1==com2) && (user1 != user2)){
    //         alert("패");
    //     }else{
    //         alert("승");
    //     }
    // }else if(user<com){
    //     if((user1==user2) && (com1 != com2)){
    //         alert("승");
    //     }else{
    //         alert("패");
    //     }
    // }else{
    //     if((user1==user2) && (com1 != com2)){
    //         alert("승");
    //     }else if((user1!=user2) && (com1 == com2)){
    //         alert("패");
    //     }else{
    //         alert("무");
    //     }
    // }

    
};