$ = new jQuery.noConflict();
$(document).ready(function() {
  $("#bangladesh text tspan").hover(
    function() {
      $(this).css("cursor", "pointer");

      const id = $(this)[0].id;

      const hoverText = $(this).text();

      var filter = data.filter(element => element[hoverText.toLowerCase()])[0];

      if (filter) {
        const district = filter[hoverText.toLowerCase()];

        $(`#${id}.tooltip`).tooltip({
          content: district.content,
          show: "fold",
          close: function(event, ui) {
            ui.tooltip.hover(
              function() {
                $(this)
                  .stop(true)
                  .fadeTo(500, 1);
              },
              function() {
                $(this).fadeOut("500", function() {
                  $(this).remove();
                });
              }
            );
          }
        });
      }
    },
    function() {
      $(this).css("cursor", "auto");
    }
  );

  // $("#Dhaka").click(function() {
  //   console.log("Dhaka");
  // });
});
