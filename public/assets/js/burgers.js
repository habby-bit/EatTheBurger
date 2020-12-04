$(function() {

    // Devour burger and move to devoured list
    $(".devourbtn").on("click", function(event) {
        const id = $(this).data("id");

        const newDevouredState = {
            devoured: true
        };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    })
    .then (
        function() {
            location.reload();
        }
    );

    });

    // Submit form and add a new burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        // If they don't enter anything, alert user
        if($("#brgr").val().trim() === "") {
            alert("Please enter a valid burger name")
        }
        else {
            var newBurger = {
                burger_name: $("#brgr").val().trim(),
                devoured: false
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
        }
    });
  
});