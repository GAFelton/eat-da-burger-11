$(function() {
    $(".addBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( function() {
            console.log("created a new burger");
            location.reload();
        })
    });


});