$(document).ready(function(){


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