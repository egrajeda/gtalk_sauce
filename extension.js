$(".dw").live("DOMNodeInserted", throttle(function() {
  console.log("onDOMNodeInserted");
  var chatWindows = $(this).find(".nH.nn");
  chatWindows.each(function() {
    if ($(this).find("img.Hi.o3").length == 0) {
      return;
    }
    $(this).width(400);
    $(this).find(".nH.nn:first-child").width(395);
  });
}));

function throttle(f) {
  var timeout;
  return function() {
    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      f.apply(context);  
    }, 100);
  }
}
