$(document).ready(function() {

    //getMember();

    // Getting references to the name input and m container, as well as the table body
    var itemInput = $("#item");
    var quantityInput = $("#quantity");
    var priceInput = $("#price");
    var userName = $(".selectUser");
    var itemList = $("#neededList");
    
    //var changeBuget = $("#changeBudgetForUser")
    // var memberContainer = $(".member-container");

    // Adding event listeners to the form to create a new object, and the button to delete
    // an m
    // $(document).on("submit", "#addMemberForm", addMember);
    $(document).on("click", "#add-another-item", addItem);

    // Getting the initial list of member
    getItem();

    // A function to handle what happens when the form is submitted to create a new m
    function addItem(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!itemInput.val().trim()) {
            return;
        }
        console.log($('#dropDown option:selected').text());
        // Calling the setMember function and passing in the value of the name input
        setItem({
            UserId: $('#dropDown option:selected').val(),
            item_name: itemInput.val().trim(),
            quantity: quantityInput.val().trim(),
            product_wish_price: priceInput.val().trim()
        });
    }

    // A function for creating an m. Calls getMember upon completion
    function setItem(itemData) {
        $.post("/api/items", itemData)
            .then(getItem);
    }

    // Function for creating a new list row for member
    function createItemRow(itemData) {
        var newTr = $("<tr>");
        console.log(itemData.User.name)
        newTr.data("item", itemData);
        newTr.append("<td>" + itemData.User.name + "</td>");
       
        newTr.append("<td>" + itemData.item_name + "</td>");

        newTr.append("<td>" + itemData.quantity + "</td>");
        newTr.append("<td>" + itemData.product_wish_price + "</td>");

        //var newOption = $("<option>" + memberData.name + "</option>");
        //newOption.attr("data-value", memberData);
        //  $(".nameOfUser").append(newOption);
        //   newTr.append("<td> " + memberData.Posts.length + "</td>");
        //   newTr.append("<td><a href='/blog?m_id=" + memberData.id + "'>Go to Posts</a></td>");
        //   newTr.append("<td><a href='/cmember?m_id=" + memberData.id + "'>Create a Post</a></td>");
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-item'>Delete Item</a></td>");
        return newTr;
    }

    // Function for retrieving member and getting them ready to be rendered to the page
    function getItem() {
        $.get("/api/items", function(data) {
            itemList.empty();
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createItemRow(data[i]));
            }
            renderItemList(rowsToAdd);
            itemInput.val("");
        });
    }

    // A function for rendering the list of member to the page
    function renderItemList(rows) {
        itemList.children().remove();
        //   memberContainer.children(".alert").remove();
        if (rows.length) {
            itemList.prepend(rows);
        }
    }

    /*

            else {
                renderEmpty();
            }
        }

        // Function for handling what to render when there are no member
        function renderEmpty() {
            var alertDiv = $("<div>");
            alertDiv.addClass("alert alert-danger");
            alertDiv.text("You must create a member and catagory before you can create a list.");
           memberContainer.append(alertDiv);
        }

        // Function for handling what happens when the delete button is pressed
        function deleteMember() {
            var listItemData = $(this).parent("td").parent("tr").data("member");
            var id = listItemData.id;
            $.ajax({
                    method: "DELETE",
                    url: "/api/User/" + id
                })
                .then(getMember);
        }

     $(document).on("click", "#change-member-budget", setBudget);
        function updateMember() {
            event.preventDefault();

            setNewBudget({
                budget: changeBuget.val().trim()
            });


    }
    */
});