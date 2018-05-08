$("#boughtItem").click(function() {
    $('#findItemInfo').toggle();
});

$("#wishList").click(function() {
    $('#neededList').toggle();
});

$("#addMember").click(function() {
    $('#formToAddMember').toggle();
});

$("#changeBudget").click(function() {
    $('#formToChangeBudget').toggle();
});

    for (var i = 0; i < memberNum.length; i++) {
        var option_i =  $("<option>" + memberNum[i] + "</option>");
        option_i.attr("data-value", memberNum[i]);
        $(".nameofUser").append(option_i);
    }
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
