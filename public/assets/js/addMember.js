function member(){
    // Getting references to the name input and m container, as well as the table body
    var nameInput = $("#name");
    var budgetInput = $("#budget");
    var memberList = $("#memberList");
    var memberContainer = $(".member-container");
  
    // Adding event listeners to the form to create a new object, and the button to delete
    // an m
    $(document).on("submit", "#addMemberForm", addMember);
    $(document).on("click", ".delete-member", deleteMember);
  
    // Getting the initial list of member
    getMember();
  
    // A function to handle what happens when the form is submitted to create a new m
    function addMember(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the setMember function and passing in the value of the name input
      setMember({
        name: nameInput
          .val()
          .trim()
      });
    }
  
    // A function for creating an m. Calls getMember upon completion
    function setMember(memberData) {
      $.post("/api/User", memberData)
        .then(getMember);
    }
  
    // Function for creating a new list row for member
    function createMemberRow(memberData) {
      var newTr = $("<tr>");
      newTr.data("member", memberData);
      newTr.append("<td>" + memberData.name + "</td>");
    //   newTr.append("<td> " + memberData.Posts.length + "</td>");
    //   newTr.append("<td><a href='/blog?m_id=" + memberData.id + "'>Go to Posts</a></td>");
    //   newTr.append("<td><a href='/cmember?m_id=" + memberData.id + "'>Create a Post</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-member'>Delete Member</a></td>");
      return newTr;
    }
  
    // Function for retrieving member and getting them ready to be rendered to the page
    function getMember() {
      $.get("/api/User", function(data) {
          console.log(data);

        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createMemberRow(data[i]));
        }
        renderMemberList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of member to the page
    function renderMemberList(rows) {
        memberList.children().remove();
    //   memberContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        memberList.prepend(rows);
      }
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
  };
  