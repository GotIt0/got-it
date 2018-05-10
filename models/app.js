$("#boughtItem").click(function() {
    $("#functionPlaceHolder").empty();
    createItem();

});

$("#wishList").click(function() {
    $("#functionPlaceHolder").empty();
});

$("#addMember").click(function() {
    $("#functionPlaceHolder").empty();
    createMember();
});

$("#changeBudget").click(function() {
    $("#functionPlaceHolder").empty();
    manageMoney();


});

function createItem() {
	$('#findItemInfo').show();
}