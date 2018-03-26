$(document).ready(function() {

  $(".wordbox").children().click(function() {
    if ($(this).hasClass("activeword")) {
      $(this).animate({
        "border-color": "white"
      }, 100);
      $(this).animate({
        "font-size": "9pt"
      }, 100);
      $(".wordcontainer").animate({
        height: "70%"
      }, 1000);
      $(this).removeClass("activeword");
      $(".epitaph").removeClass("active");
      $(".epitaph").text("MEMORY CLOUD");
      $(".memory").fadeOut("slow");
      $(".memorycontainer").animate({
        "padding-top": "5%"
      }, 200);
      $(".memorycontainer").animate({
        height: "30%"
      }, 1000);
      $(".paramita").fadeIn("slow");
      $(".wordcontainer").children().fadeIn("slow");

    } else {
      var myText = $(this).text();
      $(this).parent().siblings().fadeOut("slow");
      $(this).addClass("activeword");
      $(".epitaph").addClass("active");
      $(".epitaph").text("RELATED MEMORIES");
      $(".wordcontainer").animate({
        height: "20%"
      }, 1000);
       $(".memorycontainer").animate({
        "padding-top": "8%"
      }, 100);
      $(".memorycontainer").animate({
        height: "80%"
      }, 1000);
      $(".paramita").fadeOut("slow");
      $('.memory:contains( ' + myText + ')').fadeIn("slow");
      $(this).animate({
        "font-size": "15pt"
      }, 500);
      $(this).animate({
        "border-color": "black"
      }, 1000);
    }
  });
    
    $(".word").hover(function() {
    $(this).css("border-color", "black" )
    });
    
    $(".word").mouseout(function() {
    if ($(this).hasClass("activeword")) {
        
    } else {
    $(this).css("border-color", "white" )
    }
    });
  
});
