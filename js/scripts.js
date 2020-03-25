$(document).ready(function() {
  $('#greyclip').css('display', 'none');
  // user clicks button and the divs move
  $('#move').on('click', function() {
    $('.greys-grid-screen').css('display', 'none');
    $('.black, .white').addClass('animated').addClass('moved');
    setTimeout(function() {
      $('.black, .white').removeClass('animated').removeClass('moved');
    }, 1000);
    setTimeout(function() {
      nextScreen();
    }, 1000);
  });

  // greys-grid-screen
  function nextScreen() {
    $('h2').text("Learn about colorful people");
    $('.greys-grid-screen').css('display', 'block').css('background-color', 'grey'); // placeholder
    $('.two-divs-screen').css('display', 'none');
    $('#move').css('display', 'none');
    $('#greyclip').css('display', 'block');
  }

  // grey buttons 
  for (let i = 0; i < greys.length; ++i) {
    $("#grey").append("\
    <div class='col-sm-4 col-md-1 ml-auto mr-auto'>\
      <button class='btn btn-secondary btn-lg' 'id=greyclip'>\
        <a href='" + greys[i].href + "' link rel='pages'>\
          <span class='info'><p class='person'></p>" + greys[i].name + "</span>\
        </a>\
      </button>\
    </div>\
  ");
    greys[i][2] = $('#greyclip').css({'background-color': greys[i].backgroundColor, 'diplay': 'block'});
  };

  // show names on the buttons
  $("#greyclip").mouseenter(function() {
    $(".info", this).show();
  }).mouseleave(function() {
    $(".info", this).hide();
  });
  return false;
});







 









