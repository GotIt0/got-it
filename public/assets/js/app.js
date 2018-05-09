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



$("#addItem").click(function() {
$("#formToAddItem").toggle();
console.log("im here");

});


/*

        function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var inList = form.gridRadios[option1];
    //document.forms["gridRadios"]["option1"]
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    console.log(val); // return value of checked radio or undefined if none checked
}

});
      

                    var inList = gridRadios1.value;
            console.log(inList);

                        var notInList = gridRadios2.value;
            console.log(notInList);

            if () {
                $("#ItemAddition").toggle();
                console.log("hi")
            }


        var x=document.forms["myForm"]["fname"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }

         var x=document.forms["gridRadios"]["option1"].value;
        if (x==null || x=="") {
            $("#ItemAddition").toggle();
        }

        */
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
});