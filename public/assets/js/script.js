var buttonsArr = [];
$(document).ready(function(){
    $("#login").hide();
    $("#findItemInfo").hide();
    $(".form-group").hide();
    $("#neededList").hide();
    $("#form").hide();
    $(".card").hide();
    $("#dollar-amount").hide();
})
$("#addButton").click(function(){
    for(i=0; i<buttonsArr.length; i++) {
   var buttons = $("<button id='"+ i + "'>");
   buttonsArr.push(buttons);
    }
    $(".secondRowButtons").append(buttonsArr);
    $("#form").toggle();
})