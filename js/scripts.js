window.onload = function tearsDrop() {
  var elem = document.getElementById("tear"); 
  var pos = 0;
  var repetition = 0;
  var id = setInterval(frame, 1);
  var repetition = setTimeout(tearsDrop, 80);
      if (repetition == 198) {
          clearTimeout(repetition);
      }
  function frame() {
      if (pos == 200) {
          clearInterval(id);
      } else {
          pos++; 
          elem.style.top = pos + 'px';
      } 
    }
  }

// greys grid
const style = getComputedStyle(greys)

const backgroundColor = style.backgroundColor
console.log(backgroundColor) 
for(i = 0; i < greys.length; i++) {
  $("#greys").append("\
  <div class='col-xs-3 col-sm-2 col-md-1' id='greys'>\
    <span class='backround-color'>" + greys[i].backgroundColor + "</span>\
    <div class=''>" + greys[i].area + "</div>\
  </div>\
");
    
}
