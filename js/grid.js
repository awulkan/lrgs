/*
This script is not being used. It is reserved for future use if I ever
decide to get rid of all the media queries and simply use smart javascript
to handle the grid layout.

The UNFINISHED code below is based on the content of this site:
http://www.sitepoint.com/javascript-media-queries/


(function () {
  
  function isOdd(num) { return num % 2; }
  var rows = document.getElementsByClassName('row');
    
  for (var i = 0; i < rows.length; i++) {
    if(isOdd(rows[i].childElementCount)) {
      rows[i].lastElementChild.setAttribute("style","width:100%");
    }
  }
  
  
  var mq = window.matchMedia("(min-width: 500px)");
  
  if (mq.matches) {
    console.log(mq.matches);
  }
}());
*/