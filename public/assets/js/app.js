<<<<<<< HEAD
<<<<<<< HEAD


    $(document).ready(function(){


    
    

        $("#boughtIitem").click(function() {
            window.location.href= '#radio-buttons';
        });
       
        $("#wishList").click(function() {
            window.location.href= '#neededList';
        });
        
        $("#addMember").click(function() {
            window.location.href='#formToAddMember';
        });
    
        
        $("#changeBudget").click(function() {
            window.location.href='#formToChangeBudget';
        
            
        });
    })
        
  

        for (var i = 0; i < memberNum.length; i++) {
        var option_i =  $("<option>" + memberNum[i] + "</option>");
        option_i.attr("data-value", memberNum[i]);
        $(".nameofUser").append(option_i);
    }


     $("form-submit").on("submit", function(event) {
         // Make sure to preventDefault on a submit event.
         event.preventDefault();

         var newUser = {
             user_name: $("#name").val().trim(),

         };

         // Send the POST request.
         $.ajax("/", {
             type: "POST",
             data: newUser
         }).then(
             function() {
                 console.log("created new user");
                 // Reload the page to get the updated list
                 location.reload();
             }
         );
     });






=======
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
>>>>>>> 202b3d099fec52ed85686e91e29ba56163e36d4d
=======

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

>>>>>>> 7544b8b25b5c5f3d4bb2c2f0644bb04785beeca7
