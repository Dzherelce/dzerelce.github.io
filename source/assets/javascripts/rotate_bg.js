$(document).ready(function() {

    var imgArray = $("#backgrounds img").map(function() {
        return $(this).attr("src");
    }).get();

    $('#headerwrap').backstretch(imgArray, {duration: 3000, fade: 1500});

});
