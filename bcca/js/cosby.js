jQuery(document).ready(function($){
    function bcca(){
        // This contains all of the game dialogue
        var d = [
            "<p>You are at the entrance of the circus.</p>"
        ];
        
        // This is where game dialogue gets sent to the player
        $('.feedback').append(d[0]);
    }
    bcca();
});