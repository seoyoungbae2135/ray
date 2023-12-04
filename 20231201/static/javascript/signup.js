//signup.html link

$(function(){  
    $(".join_input>input").on("focus",function(){ //join_input>input:join_input태그 하위 input태그 focus:마우스 커서가 올라가면
        //형제 요소(태그) 찾기 _ siblings() 모든형제, next() 다음에 있는 형제
        // nextAll() 뒤에있는 모든형제, prev()앞에있는 형제 
        // prevAll() 잎에있는 모든형제
        $(this).next().css("top","-20px"); // input을 클릭하면 label이 위로 20px 위치이동한다.
    });

    $(".join_input>input").on("blur",function(){ //blur : 마우스 커서가 나가면
        if($(this).val().length==0)  // 또 input안에 글씨가 없다면
        $(this).next().css("top","50%"); //label 이 원래위치로 이동
    });


    //회원가입 버튼 클릭시 아이디, 비밀번호, 비밀번호확인, 이메일
    // 값 입력여부 확인 및, 비밀번호와 비밀번호 확인의 값이 일치여부 만들기
    // me
    // $(".joinBt>button").on("click",function(){
    //     if($("#id").val() == ''){
    //         alert("아이디를 입력하세요");
    //         $("#bt").focus();
    //     }else if($("#pw").val() == ''){
    //         alert("비밀번호를 입력하세요");
    //         $("#pw").focus();
    //     }else if($("#pwre").val() == ''){
    //         alert("비밀번호확인을 입력하세요")
    //         $("#pwre").focus();
    //     }else if($("#email").val() == ''){
    //         alert("이메일을 입력하세요");
    //         $("email").focus();
    //     }

    //     else{

    //     }


    // })
    // teacher
    $("#bt").on("click",function(){

        if($("#id").val()==''){
            alert("아이디 입력하세요");
            $("#id").focud();
        }else if($("#pw").val() == ''){
            alert("비밀번호를 입력하세요");
            $("#pw").focus();
        }else if($("#pwre").val() == ''){
            alert("비밀번호확인을 입력하세요")
            $("#pwre").focus();
        }else if($("#email").val() == ''){
            alert("이메일을 입력하세요");
            $("email").focus();
        }else if($("pw").val() != $("#pwre").val()){
            alert("비밀번호를 다시확인해주세요")
            $("#pw").val('').focus();
            $("#pwre").val('');
        }
    });

    $("#face").on("change",function(){  // change: 클릭하고난 후에 다음동작 이것으로해야 파일을 불러올 수 있다
        var images = this.files[0];
        //파일(이미지,문서,영상,음악 등등) 불러오기
        var reader = new FileReader(); // FileReader() 파일불러오는 자비스크립트 객체

        reader.onload=function(e){  //파일불러오기 성공시
            $("#select_face").attr("src", e.target.result) // 파일을 src로 보내라, e는 변수, target.result 명령어
        }

        reader.readAsDataURL(images);// 불러올 파일정보 넣어주기
        //console.log(images.name);
    });

});

