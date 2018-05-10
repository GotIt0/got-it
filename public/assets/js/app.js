$(document).ready(function(){
    $('#radio-buttons').hide();
    $('#newItem').hide();
    $('#formToAddMember').hide();
    $('#formToChangeBudget').hide();
    $('#dollar-amount').hide();
    $('.card').hide();
    $('#neededList').hide();
    $("#addAnItem").hide();

    $("#boughtIitem").click(function() {
        $("#addAnItem").toggle();
        console.log("im here");
    });
   
    $("#wishList").click(function() {
        $("#neededList").toggle();
    });
    
    $("#addMember").click(function() {
        $("#formToAddMember").toggle();
    });
    
    $("#changeBudget").click(function() {
        $("#formToChangeBudget").toggle();
        console.log("im here");
        
    });

})