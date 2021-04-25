$ = new jQuery.noConflict();
$(document).ready(function() {
  $("svg#bangladesh path").mouseover(function() {
    var showID = $(this).attr("id");
    console.log(showID);
  });

  $("#Dhaka").click(function() {
    console.log("Dhaka");
  });
});
