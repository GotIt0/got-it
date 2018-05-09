$(document).ready(function(){


    
    

    $("#boughtIitem").click(function() {
        // $('.cd-fixed-bg.cd-fixed-bg--1').toggle();
        // console.log("im here");
        // $('.cd-fixed-bg.cd-fixed-bg--7').show();
        window.location.href= '#radio-buttons';
    });
   
    $("#wishList").click(function() {
        // $('.cd-fixed-bg.cd-fixed-bg--2').toggle();
        // $('.cd-fixed-bg.cd-fixed-bg--5').show();
        window.location.href= '#neededList';
    });
    
    $("#addMember").click(function() {
        // $('.cd-fixed-bg.cd-fixed-bg--3').toggle();
        // console.log("IM here")
        // $('.cd-fixed-bg.cd-fixed-bg--6').show();
        window.location.href='#formToAddMember';
    });

    
    $("#changeBudget").click(function() {
        window.location.href='#formToChangeBudget';
    
        
    });
})

if($('#gridRadios1').is(':checked')) {
    $('.nameofUser').append()
}

// // $("#boughtItem").click(function() {
// //     $('#findItemInfo').show();
// // });

// // $("#wishList").click(function() {
// //     $('#neededList').show();
// // });

// // $("#addMember").click(function() {
// //     $('#formToAddMember').show();
// // });

// // $("#changeBudget").click(function() {
// //     $('#formToChangeBudget').show();
// // });

// $("#boughtIitem").click(function() {
//     $(".form-group").toggle();
//     console.log("im here");
// });


// $("#wishList").click(function() {
//     $("#neededList").toggle();
// });

// $("#addMember").click(function() {
//     $("#formToAddMember").toggle();
// });

// $("#changeBudget").click(function() {
//     $("#formToChangeBudget").toggle();
// });