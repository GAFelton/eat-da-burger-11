$(function() {
    $(".addBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: false
        };

        // Send POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( function() {
            console.log("created a new burger");
            location.reload();
        })
    });

    $(".devourMe").on("click", function(event) {
        var id = $(this).data("burgerid");

        var burgerUpdate = {
            devoured: true
        };

        // Send PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerUpdate
        }).then(function() {
            console.log(`Burger ${id} devoured.`);
            location.reload();
        })
    });

});