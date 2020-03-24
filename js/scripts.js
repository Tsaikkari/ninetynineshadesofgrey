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

function nextScreen() {
  $('h2').text("Learn about colorful people");
  $('.greys-grid-screen').css('display', 'block').css('background-color', 'grey'); // placeholder
  $('.two-divs-screen').css('display', 'none');
  $('#move').css('display', 'none');
  $('#greyclip').css('display', 'block');
}



 









