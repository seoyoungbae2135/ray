

function send(){
    var send_data = { writer:$("#writer").val() , content:$("#content").val()};
    send_data = JSON.stringify(send_data); // JSON.stringify => json데이터로 변환 

    var xml = new XMLHttpRequest();
    xml.onload=function(){
        var data = JSON.parse(this.response);
        chat_show(data);
    };
    xml.open("POST" , "http://krdrive.ipdisk.co.kr:8000/test/data.php");
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send("x=" + send_data );
}

function chat_show(data){
    var out="";
    $each(data , function( i , msg){
        out +=`<li class='hcat'><div class='write_info'>
        <b class='name'>${msg.write}</b>
        <span class='data'>${msg.data}</span></div>
        <div class='content'>${msg.content}</div><li>`;
    });
    $("#chat_list").html( out );
    $("#content").val('').focus();
}