let ref=0;
$(function(){
    $.getJSON("http://krdrive.ipdisk.co.kr:8000/test/data.php",function(data){
        chat_show(data);
    });

    re = setTimeout(function(){
        location.reload();
    },5000);
});

$(document).on("keyup",function(){
    if(re!=0)
        clearTimeout(re);
});

function send(){
    var send_data = { writer:$("#writer").val() , content:$("#content").val()};
    send_data = JSON.stringify(send_data); // JSON.stringify => json데이터로 변환 

    var xml = new XMLHttpRequest();
    xml.onload=function(){
        var data = JSON.parse(this.response); //JSON.parse : JSON 데이터 문자열을 객체(key와value)로 변환 
        chat_show(data);
    };
    xml.open("POST" , "http://krdrive.ipdisk.co.kr:8000/test/data.php");
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send("x=" + send_data );
}

function chat_show(data){
    var out="";
    $.each(data , function( i , msg){
        out +=`<li class='chat'><div class='write_info'>
        <b class='name'>${msg.writer}</b>
        <span class='data'>${msg.data}</span></div>
        <div class='content'>${msg.content}</div><li>`;
    });
    $("#chat_list").html( out );
    $("#content").val('').focus();
}