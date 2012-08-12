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
