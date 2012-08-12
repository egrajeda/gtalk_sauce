$(".dw").live("DOMNodeInserted", throttle(function() {
  var chatWindows = $(this).find(".nH.nn:not(:first-child):not(:last-child)");
  chatWindows.each(function() {
    if ($(this).find("img.Hi.o3").length == 0) {
      return;
    }
    $(this).animate({width: 400});
    $(this).find(".nH.nn:first-child").animate({width: 395});
  });
}));

$("div[role=log]").live("DOMNodeInserted", function(e) {
    var node = e.target;
    var link = $(node).is("a") ? $(node) : $(node).find("a");
    if (link.is("[href$='.gif'],[href$='.jpg'],[href$='.png']")) {
        link.html($("<img>", {src: link.attr("href"), style: "max-width: 100px;"}));
    }
});

function throttle(f) {
  var timeout;
  return function() {
    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      f.apply(context);  
    }, 250);
  }
}
