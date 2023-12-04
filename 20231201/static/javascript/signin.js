
let mid=["abc","good","nicegui","skyblue123","tty","jkr11","kingpack","joker"];
  // 입력 저장된 아이디 가정
let mpw=["1234","gd123","qwer1234","12345","4321","54321","0987","7890"];
  // 입력 저장된 패스워드 가정

$(function(){
    $("#signBt").on("click",function(){

        if($("#id").val() == ''){  // input태그의 id에 입력값이 없다면 
            alert("아이디를 입력하세요"); // 아이디를 입력하세요 띄운다
            $("#id").focus();  // 커서가 아이디 입력태그로 위치한다
        }else if($("#pw").val() == ''){  //비번 동일하게 동작
            alert("비밀번호를 입력하세요");
            $("#pw").focus();
        }
        else{

            //아이디존재유무
            var idx = mid.indexOf( $("#id").val());  // 문자열의 indexOf로 mid에 저장된 아이디 검색 하여 변수 idx에 결과 저장
            if(idx == -1){  // 변수 idx에 아이디가 없다면
                var ok = confirm("아이디가 존재하지 않습니다.\n회원가입 하시겠습니까"); //confirm은 alert에 확인, 취소 버튼이 있다
                if(ok) location.href="signup.html"; // location은 주소를 제어하는 명령어, ok버튼을 선택하면 signup.html로 주소를 변경(이동)
            }else if( mpw[idx] == $("#pw").val()){
                alert("로그인 성공");
            }else{
                alert("비밀번호가 일치하지 않습니다.");
                $("#pw").val("").focus(); // 비밀번호 재입력을 위해 비우고 커서두기
            }


            // for( var tmp in mid){ //배열을 사용하여 for문 만들때 of를 쓰면 변수에 데이터를 순서대로 저장한다.  // in 을사용하면 인덱스를 저장 
            //     if(mid[tmp] == $("#id").val()){ //변수 mid에 tmp와 #id에 입력한 값이 일치하면 
            //         if( mpw[tmp] == $("#pw").val()){  // 
            //             alert("로그인 성공");
            //             break;
            //         }else{
            //             alert("비밀번호가 일치하지 않습니다")
            //         }
            //     }                 

            }

        });

        // if($("#id").val != "abc"){  // 아이디가 없는 경우

        // }
        // //로그인 시도가 된다면 - 아이디, 비밀번호가 올바르지 않은 경우(서버로부터 불일치 결과 리턴시)
        // else if($("#id").val != '' && $("#pw").val != ''){ 
        //     alert("아이디 또는 비밀번호가 올바르지 않습니다");
        //     $("#id").val("").focus();  // id를 지우고 커서를 id에 위치
        //     $("#pw").val("");   //비번을 지운다
        // }


    });
