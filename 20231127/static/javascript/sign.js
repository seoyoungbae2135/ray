

$(function(){

    $("#mypw").on("keyup",function(){   //id mypw에 key 입력이되면 실행
        if($(this).val().length < 6 || $(this).val().length > 12){ 
            $(".pwvaild").text("비밀번호 6~12자 입니다.");
        }else{
            $(".pwvaild").text('');
        }
    })

    $("#join").on("click",function(){   // id join을 클릭하면 실행

            if($("#myid").val() == '' ){   //아이디를 입력하지않으면 
                alert("아이디를 입력하세요");  // alert을 띄운다.
                $("#myid").focus();
            }
            if($("#mypw").val()!=$("#pwre").val()){
                alert("비밀번호가 같지않습니다");
                $("#mypw").val(''); // 입력된 비밀번호 지움
                $("#pwre").val(''); // 입력된 비밀번호확인 지움
                $("#mypw").focus(); // 커서를 비밀번호에 위치
            }
    })
})