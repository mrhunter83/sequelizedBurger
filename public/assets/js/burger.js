$(document).ready(function() {
  $("#create").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#new").val().trim(),
      devoured: false
    };
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });


  $(".devour").on("click", function(event) {
    event.preventDefault();
    $(this).attr("data-devoured", "true");
    var id = $(this).attr("data-id");
    var devoured = $(this).attr("data-devoured");
    var devouredCondition = {devoured: devoured};
  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredCondition
  }).then(function() {
    console.log("devoured", id);
    // Reload the page to get the updated list
    location.reload();
  });
});
});