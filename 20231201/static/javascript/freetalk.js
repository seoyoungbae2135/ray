
$(function(){
    $("#in").on("keyup",function(){

        var word = $(this).val();

        $(".detail>tr").filter(   // filter jquery에서 필터링 명령어 
            function(){

                $(this).toggle( $(this).text().includes(word)); // 검색창에 입력시 입력된 문자와 일치하는 것 만 보이게 한다.
                
                // console.log( $(this).text().includes(word));
            }
        )
        //$(".detail>tr").eq(1).toggle(false);  //.eq(1) 2번째 tr, toggle(false): 검색창에 입력시 안보이게 된다, toggle(true)는 보이게 된다 이것을 이용하여 table 내용을 자동으로 보이거나 안보이게 한다

    })
})