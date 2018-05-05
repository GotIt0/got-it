var buttonsArr = [];
$(document).ready(function(){
    $("#form").hide();
})
$("#addButton").click(function(){
    for(i=0; i<buttonsArr.length; i++) {
   var buttons = $("<button id='"+ i + "'>");
   buttonsArr.push(buttons);
    }
    $(".secondRowButtons").append(buttonsArr);
    $("#form").toggle();
})