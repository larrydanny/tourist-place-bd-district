$ = new jQuery.noConflict();
$(document).ready(function() {
  $(`#bangladesh path`).css({"fill": "#e8b3b3"});

  $("#bangladesh text tspan").hover(
    function() {
      $(this).css("cursor", "pointer");

      const id = $(this)[0].id;

      const hoverText = $(this).text();

      var filter = data.filter(element => element[hoverText.toLowerCase()])[0];

      if (filter) {
        const district = filter[hoverText.toLowerCase()];

        $(`#${district.title}`).css({"fill": "green", "color": "white"});

        $(`#${id}.tooltip`).tooltip({
          show: "fold",
          content: district.content,
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
      $(`#bangladesh path`).css({"fill": "#e8b3b3"});
    }
  );

  // $("#Dhaka").click(function() {
  //   console.log("Dhaka");
  // });
});
