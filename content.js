var comments = document.getElementById("Comments");
items = document.getElementById("Items");
if (comments) {
  comments.parentNode.removeChild(comments);
  console.log("removed");

} else {
  console.log("not found");
}
if (items) {
  items.parentNode.removeChild(items);
  console.log("removed");
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      console.log("hello");
    } else if( request.message === "onHeadersReceived" ) {
      console.log("Header Received");
    }
  }
);





// var tick = 0
// for (var i = 0; i < 60; i++) {
//     setTimeout(function() {
//       fuckOFFclass('fyre-widget');
//     }, 1000 * i);
// }

// function fuckOFFclass(fuckTHISone) {
//   var elems = document.getElementsByClassName("fyre-widget");
//   for(var i=0; i<elems.length; i++) {
//     elems[i].parentNode.removeChild(elems[i])
//   }
// }
