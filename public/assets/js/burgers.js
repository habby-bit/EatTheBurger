// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".devourbtn").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevouredState = {
            devoured: newDevour
        };


    // Send the PUT request.
    $.ajax("/api/burgers" + id, {
        type: "PUT",
        data: newDevouredState
    })
    .then (
        function() {
            location.reload();
        }
    );

    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#brgr").val().trim(),
            devoured: "false"
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then(
            function() {
                location.reload();
            }
        );
  });
  
});