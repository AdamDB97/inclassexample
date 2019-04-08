//console.log( document.getElementById( "#menu" ) )

console.log("javascript loaded") //use console.log to debug in inspect mode

//This needs to be here for the functions to work
$( document ).ready(function() {

    console.log("document ready")

    //This is our code for the click handler, which is linked to our menu icon
    $( "#menu" ).click(function() {
        
        console.log("menu clicked");

        $("#navigation-bar").toggleClass("navigation-bar--hidden")
        //Here's that ID we added to the html

        $("#content").toggleClass("content--no-navigation")

        //alert( "Handler for .click() called." );
        //This is the message displayed when you click the button

    });

    //When the FAB (floating action button) is clicked
    $( "#button-card-transition").click(function() {

        //Animate button when clicked
        $("#button-card-transition")
        .addClass("button-click");

        //Remove the button click class after animation ends
        setTimeout(function(){
            $("#button-card-transition")
            .removeClass("button-click");
        },300);

        console.log("fab clicked");

        //If red is faded out: fade in red, fade out blue
        if($(".card__red").hasClass("fade-through-out")){
            fadeThrough(
                $(".card__blue"), $(".card__red")
            );
            rotateToggle(
                $("#icon-plus"), $("#icon-return")
            );
        }
        //If red is faded in: fade out red, fade in blue
        else{
            fadeThrough(
                $(".card__red"), $(".card__blue")
            );
            rotateToggle(
                $("#icon-return"), $("#icon-plus")
            );
        }

    });

    //this is our refactored (simplified) code for running the transition
    function fadeThrough(elementFadeOut, elementFadeIn){

        elementFadeOut.removeClass("fade-through-in");
        elementFadeOut.addClass("fade-through-out");

        elementFadeIn.removeClass("fade-through-out");
        elementFadeIn.addClass("fade-through-in");
    }


    //function for rotating the icons
    function rotateToggle(elementRotateOut, elementRotateIn){
        
        elementRotateOut.removeClass("rotate-in");
        elementRotateOut.addClass("rotate-out");

        elementRotateIn.removeClass("rotate-out");
        elementRotateIn.addClass("rotate-in");
    }
});