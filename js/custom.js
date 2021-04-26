$ = new jQuery.noConflict();
$(document).ready(function() {
  $("#bangladesh text tspan").hover(
    function() {
      $(this).css("cursor", "pointer");

      // $.get(
      //   "https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%97%E0%A6%A1%E0%A6%BC_%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE#%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8%E0%A7%80%E0%A6%AF%E0%A6%BC_%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9",
      //   function(data) {
      //     console.log("data", data);
      //     // $(".result").html(data);
      //     alert("Load was performed.");
      //   }
      // );

      // var contentURI =
      //   "https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%97%E0%A6%A1%E0%A6%BC_%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE#%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8%E0%A7%80%E0%A6%AF%E0%A6%BC_%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9";

      // var htmlData = $.get("request.php?url=" + contentURI, function(data) {
      //   console.log(typeof data);
      //   console.log($(data));
      //   console.log(typeof data);
      // });
      // var htmlData = $.ajax({
      //   type: "GET",
      //   url: "request.php?url=" + contentURI,
      //   async: false,
      //   dataType: "html"
      // }).responseText;

      // var uri =
      //   "https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%97%E0%A6%A1%E0%A6%BC_%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE#%E0%A6%AD%E0%A7%8C%E0%A6%97%E0%A7%8B%E0%A6%B2%E0%A6%BF%E0%A6%95_%E0%A6%85%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8";

      const id = $(this)[0].id;

      const hoverText = $(this).text();

      var filter = data.filter(element => element[hoverText.toLowerCase()])[0];

      if (filter) {
        const district = filter[hoverText.toLowerCase()];

        // $(`.tooltip`).tooltip("close");

        $(`#${id}.tooltip`).tooltip({
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
          },
          content: district.content
          // open: function(event, ui) {
          //   var elem = $(this);
          //   $.ajax({
          //     type: "GET",
          //     url: "request.php?url=" + uri,
          //     async: false,
          //     dataType: "html"
          //   }).always(function(data) {
          //     elem.tooltip("option", "content", data);
          //   });
          // }
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
