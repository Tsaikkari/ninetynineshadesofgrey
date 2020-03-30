
$(document).ready(function() {
  $('.greys-grid-screen').css('display', 'none');
  $('.moving-smoke').css('display', 'none');
  $('h2').css('display', 'none');
  // user clicks button and the divs move
  $('#move-div').on('click', function() {
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
    $('h2').css('display', 'block');
    $('.greys-grid-screen').css('display', 'block');
    $('.two-divs-screen').css('display', 'none');
    $('#move-div').css('display', 'none');
    $('#greyclip').css('display', 'block');
  }
  
  // grey buttons TODO: Fix this
  for (let i = 0; i < greys.length; ++i) {
    $("#grey").append(`<div class='col-sm-4 col-md-1 ml-auto mr-auto'><a href='${greys[i].href}' class='greybutton' style='background:${greys[i].backgroundColor}'>${greys[i].name}</a></div>`);
  };  

  return false;
});








 









