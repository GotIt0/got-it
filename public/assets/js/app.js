
$(document).ready(function() {






    $("#boughtIitem").click(function() {
        window.location.href = '#radio-buttons';
    });

    $("#wishList").click(function() {
        window.location.href = '#neededList';
    });

    $("#addMember").click(function() {
        window.location.href = '#formToAddMember';
    });


    $("#changeBudget").click(function() {
        window.location.href = '#formToChangeBudget';


    });
})



// $("#addItem").click(function() {
// $("#formToAddItem").toggle();
// console.log("im here");

// });




/*


var user_name = [];
for (var i = 0; i < user_name.length; i++) {
    var option_i = $("<option>" + user_name[i] + "</option>");
    option_i.attr("data-value", nameInput[i]);
    $(".nameOfUser").append(option_i);
}


$("#form-submit").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    var new_name = $("#newName").val().trim();
    new_name.push(user_name[i]);
});
console.log(new_name);

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
*/
