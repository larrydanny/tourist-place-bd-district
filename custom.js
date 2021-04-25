$ = new jQuery.noConflict();
$(document).ready(function() {
  $("#bangladesh text tspan").hover(
    function() {
      $(this).css("cursor", "pointer");
    },
    function() {
      $(this).css("cursor", "auto");
    }
  );

  $("#lalmonirhatTooltip").tooltip({
    content:
      '<h1>লালমনিরহাট জেলা</h1><b>দর্শনীয় স্থান</b><ul><li><a href="/wiki/%E0%A7%AC%E0%A7%AF_%E0%A6%B9%E0%A6%BF%E0%A6%9C%E0%A6%B0%E0%A7%80%E0%A6%B0_%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%8B_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6" class="mw-redirect" title="৬৯ হিজরীর হারানো মসজিদ">৬৯ হিজরীর হারানো মসজিদ</a></li><li><a href="/wiki/%E0%A6%B2%E0%A6%BE%E0%A6%B2%E0%A6%AE%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A6%B9%E0%A6%BE%E0%A6%9F_%E0%A6%B0%E0%A7%87%E0%A6%B2%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%87_%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%B6%E0%A6%A8" title="লালমনিরহাট রেলওয়ে স্টেশন">লালমনিরহাট রেলওয়ে স্টেশন</a></li><li><a href="/wiki/%E0%A6%A4%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%9C" class="mw-redirect" title="তিস্তা ব্যারেজ">তিস্তা ব্যারেজ</a></li><li><a href="/wiki/%E0%A6%B2%E0%A6%BE%E0%A6%B2%E0%A6%AE%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A6%B9%E0%A6%BE%E0%A6%9F_%E0%A6%AC%E0%A6%BF%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0" title="লালমনিরহাট বিমানবন্দর">লালমনিরহাট বিমান বন্দর</a></li><li><a href="/wiki/%E0%A6%A4%E0%A6%BF%E0%A6%A8%E0%A6%AC%E0%A6%BF%E0%A6%98%E0%A6%BE_%E0%A6%95%E0%A6%B0%E0%A6%BF%E0%A6%A1%E0%A7%8B%E0%A6%B0" title="তিনবিঘা করিডোর">তিনবিঘা করিডোর</a></li><li><a href="/wiki/%E0%A6%A4%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE_%E0%A6%B0%E0%A7%87%E0%A6%B2_%E0%A6%B8%E0%A7%87%E0%A6%A4%E0%A7%81" title="তিস্তা রেল সেতু">তিস্তা রেল সেতু</a></li><li><a href="/wiki/%E0%A6%B8%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A6%AE%E0%A6%A4%E0%A6%BF_%E0%A6%A6%E0%A6%BF%E0%A6%98%E0%A6%BF" title="সিন্দুরমতি দিঘি">সিন্দুরমতি দিঘি</a></li><li>বোতল বা‌ড়ি (নওদাবাস, কালীগঞ্জ)</li><li>কবি শেখ ফজলুল করিমের বসত ভিটা</li><li><a href="/wiki/%E0%A6%95%E0%A6%BE%E0%A6%95%E0%A6%BF%E0%A6%A8%E0%A6%BE_%E0%A6%9C%E0%A6%AE%E0%A6%BF%E0%A6%A6%E0%A6%BE%E0%A6%B0_%E0%A6%AC%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF" title="কাকিনা জমিদার বাড়ি">কাকিনা জমিদার বাড়ি</a></li><li>কালিবাড়ি মন্দির (পাশাপাশি স্থাপিত মসজিদ ও মন্দির)</li><li><a href="/wiki/%E0%A6%A4%E0%A7%81%E0%A6%B7%E0%A6%AD%E0%A6%BE%E0%A6%A3%E0%A7%8D%E0%A6%A1%E0%A6%BE%E0%A6%B0_%E0%A6%9C%E0%A6%AE%E0%A6%BF%E0%A6%A6%E0%A6%BE%E0%A6%B0_%E0%A6%AC%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF" class="mw-redirect" title="তুষভাণ্ডার জমিদার বাড়ি">তুষভাণ্ডার জমিদার বাড়ি</a></li><li>তুষভান্ডার জমিদার বাড়ি কালীমন্দির</li><li>শালবন, হাতীবান্ধা</li><li><a href="/w/index.php?title=%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%B8%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A6%AE%E0%A6%A4%E0%A6%BF_%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0&amp;action=edit&amp;redlink=1" class="new" title="ঐতিহ্যবাহী সিন্দুরমতি মন্দির (পাতার অস্তিত্ব নেই)">ঐতিহ্যবাহী সিন্দুরমতি মন্দির</a></li><li><a href="/w/index.php?title=%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0_%E0%A6%AC%E0%A7%83%E0%A6%B9%E0%A6%93%E0%A6%AE_%E0%A6%B8%E0%A7%87%E0%A6%9A_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA_%22%E0%A6%A4%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE_%E0%A6%B8%E0%A7%87%E0%A6%9A_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA%22&amp;action=edit&amp;redlink=1" class="new" title="দেশের বৃহওম সেচ প্রকল্প &quot;তিস্তা সেচ প্রকল্প&quot; (পাতার অস্তিত্ব নেই)">দেশের বৃহওম সেচ প্রকল্প "তিস্তা সেচ প্রকল্প"</a></li><li><a href="/w/index.php?title=%E0%A6%AC%E0%A7%81%E0%A6%A1%E0%A6%BC%E0%A6%BF%E0%A6%AE%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF_%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A7%8B_%E0%A6%AA%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F&amp;action=edit&amp;redlink=1" class="new" title="বুড়িমাড়ি জিরো পয়েন্ট (পাতার অস্তিত্ব নেই)">বুড়িমারী জিরো পয়েন্ট</a></li></ul>',
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

  // $("#Dhaka").click(function() {
  //   console.log("Dhaka");
  // });
});
