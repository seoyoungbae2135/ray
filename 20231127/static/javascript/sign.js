

$(function(){



    //select값 option 변경하기
    $("#route option").eq(2).prop("selected",true); //eq(2):3번째 option

    // 전부체크 체크박스에 체크시 전체 체크로 변하게 또는 반대상황
    $("#all").on("click", function(){
        let isCheck = $(this).is(":checked");
        if(isCheck)
            $(".ability_list").prop('checked',true);
        else
            $(".ability_list").prop('checked',false);
    });

    $(".ability_list").on("click",function(){
        var chk_count = $(".ability_list:checked").length; //능력 체크박스에 체크된 갯수
        var all_check = $(".ability_list").length; //능력 체크박스 총 갯수
        if(chk_count == all_check) //체크된 갯수와 총갯수를 비교
            $("#all").prop("checked",true); // 체크 갯수와 총 갯수가 같다면 전체 체크박스에 체크
        else
            $("#all").prop("checked",false); // 체크 갯수와 총 갯수가 다르면 전체 체크박스에 체크해제
    });




    $("#mypw").on("keyup",function(){   //id mypw에 key 입력이되면 실행
        if($(this).val().length < 6 || $(this).val().length > 12){ 
            $(".pwvaild").text("비밀번호 6~12자 입니다.");
        }else{
            $(".pwvaild").text('비밀번호 안전');
        }
    })

    $("#myphone").on("keyup",function(){
        var num = $(this).val();

        // 문자열음 기본구조가 배열의 구조이지만 자바스크립트에서 문자열 객체로 사용되기 때문에
        // 객체전용 함수가 따로 존재한다.

        // 숫자입력시 하이픈 생성코드
        // if(num.length ==4 ){
        //     num=num.slice(0,3)+"-"+num.slice(3);
        //     $(this).val(num);
        // }
        // if(num.length == 9){
        //     num=num.slice(0,8)+"-"+num.slice(8);
        //     $(this).val(num);
        // }

        // 이것을 정규표현식으로 간단하게 하면

        //num=num.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`); //`$1-$2-$3` 는 백틱
        // 두번째 정규표현식
        num=num.replace(/[^0-9]/g, '').
            replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, `$1-$2-$3`).
            replace(/(\-{1,2})$/g,""); //하이픈 삭제
        $(this).val(num);

        
        
    });

    $("#join").on("click",function(){   // id join을 클릭하면 실행

        //파일업로드 확장자 검증
        console.log( $("#myface")[0].files[0].name);
        var fname = $("#myface")[0].files[0].name;
        if( !fname.toLowerCase().includes(".png")){
            alert("png형식의 이미지만 가능합니다.")
        }

        //select값 가져오기

       var v = $("#route").val(); // $("#route option:selected").val();
       alert(v);


        // 체크박스에 체크된 값을 자바스크립트로 가져오는 코드
        //var chk = $(".ability_list").eq(0).is(":checked");
        //alert( chk);
        var len = $(".ability_list:checked").length;
        alert(len);

        let chk = ''; // check값을 넣기위한 변수
        $.each($(".ability_list:checked"), function(){ // 체크되어있는 checkbox만 반복문 처리
            chk += $(this).val() +" ";
        });
        alert(chk);

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