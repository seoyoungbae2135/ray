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

    var a=234;
    switch(a){  //a에 들어있는 변수로 선택하는 것
        case 1:  //a에 1이들어있으면 선택
            alert("1");
            break;  // 코드의 흐름을 중단시킨다.(if문에 사용하지 않는다) 반복문과 switch문에서만 사용한다.
        case 1000:
            alert("1000");
            break;  // break를 적용하지 않으면 하위 코드도 모두 실행된다 
        case 234:
            alert("234");
            break;
        case 10:
            alert("10 선택");
    }


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