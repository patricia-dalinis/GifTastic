// When the webpage opens, an array of movies as buttons will load on-screen. The "Add Movie" form will also be visible.
// When a movie is clicked, 10 gifs of that movie will appear on the screen, pulled from the giphy API.
    // The title should also be pulled? TBD...
// When another movie is clicked, the 10 gifs are replaced with new gifs for that movie.
// When a gif is clicked on, the gif should toggle on and off.
// When a movie is added, it should be added to the array and the new movie will pull from it's giphy API when pulled.


// Array of Movies
var movies = ["The Shining" , "The Mummy" , "Dawn of the Dead" , "Bill and Ted's Excellent Adventure" , "Star Wars" , "The Princess Bride" , "A Knight's Tale" , "It Happened One Night" , "Ferris Bueller's Day Off" , "Buffy The Vampire Slayer" , "Matilda" , "Trick R Treat"];

// Button Functionality
$(document).ready(function() {
    function makeButtons () {
        $("#buttons-here").empty();
        for (var i = 0; i < movies.length; i++) {
            var button = $("<button>");
            button.addClass("movie" , "btn btn-info");
            button.attr("data-name", movies[i]);
            button.text(movies[i]);
        }
    }
})