$(document).ready(function() {
    // Preload images
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // Set up event handlers for links    
    $("#image_list a").click(function(evt) {
        evt.preventDefault();  // Cancel the default action of the link

        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        // Fade out current image and caption
        $("#caption").fadeOut(1000, function() {
            $("#caption").text(caption).fadeIn(1000);
        });

        $("#image").fadeOut(1000, function() {
            $("#image").attr("src", imageURL).fadeIn(1000);
        });

        // Move focus to first thumbnail if needed
        $("li:first-child a").focus();
    }); // end click
}); // end ready
