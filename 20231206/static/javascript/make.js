
$(function(){
    $("#make").on("click",makeTable);
});

function makeTable(){
    var row=Number($("#row").val());
    var col=Number($("#col").val());

    var table = "<table>";
    for(var i=1; i<=row; i++){ //행, td
        table += "<tr>";
        for(var k=1; k<=col; k++){ //열, td
            table +="<td></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    
    opener.$("#draw").html(table)  // $("#draw",opener.document)로 해도된다

    opener.$("#size").attr("disabled",false); // #size를 활성화 시킨다
    window.close();  //자기창을 닫는다
    //opener.document.getElementById("draw").innerHTML="aaa"; //부모쪽 javascript 제어 
    
}