// When the webpage opens, an array of movies as buttons will load on-screen. The "Add Movie" form will also be visible.
// When a movie is clicked, 10 gifs of that movie will appear on the screen, pulled from the giphy API.
// The title should also be pulled? TBD...
// When another movie is clicked, the 10 gifs are replaced with new gifs for that movie.
// When a gif is clicked on, the gif should toggle on and off.
// When a movie is added, it should be added to the array and the new movie will pull from it's giphy API when pulled.


$(document).ready(function () {

    var movies = ["The Shining", "The Mummy", "Dawn of the Dead", "Bill and Ted's Excellent Adventure", "Star Wars", "The Princess Bride", "A Knight's Tale", "It Happened One Night", "Ferris Bueller's Day Off", "Buffy The Vampire Slayer", "Matilda", "Trick R Treat"];
    var results;

    function makeButtons() {
        $("#buttons-here").empty();
        for (var i = 0; i < movies.length; i++) {
            var button = $("<button>");
            button.addClass("movie", "btn btn-block");
            button.attr("data-name", movies[i]);
            button.text(movies[i]);
            $("#buttons-here").append(button);
        };
    };

    makeButtons();

    $("#add-movie").on("click", function (event) {
        event.preventDefault();
        var movie = $("#movie-input").val().trim();
        console.log("New Movie: ", movie);
        movies.push(movie);
        $("#movie-input").val("");
        makeButtons();
    });

    // makeButtons();

    $("button").on("click", function () {
        var thisMovie = $(this).attr("data-name");
        console.log(thisMovie);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisMovie + "&api_key=KL0UAhT41qW9T3tMUDSWhiFnNWepBsBA&limit=10"

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function (response) {
                console.log(response);
                results = response.data;
                $("#gifs-here").empty();

                for (var i = 0; i < results.length; i++) {

                    var imageDiv = $("<div>");
                    imageDiv.addClass("image-div", "img img-block");

                    var gifTitle = $("<p>");
                    gifTitle.text("Title: " + results[i].title);

                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height_still.url)
                        .attr("data-state", "still")
                        .attr("data-still", results[i].images.fixed_height_still.url)
                        .attr("data-animate", results[i].images.fixed_height.url);

                    imageDiv.append(gifTitle).prepend(gifImage);
                    $("#gifs-here").append(imageDiv);
                }

            });
    });


    function playGifs() {
        var state = $(this).attr("data-state")
        if (state == "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        };

    };


    $("#gifs-here").on("click", "img", playGifs);

});