var buttonsArr = [];
$(document).ready(function(){
    $("#form").hide();
})
$("#addButton").click(function(){
    for(i=0; i<buttonsArr.length; i++) {
    buttonsArr.push("<button id='"+ i + "'>");
    }
    $(".secondRowButtons").append(buttonsArr);
    $("#form").toggle();
})