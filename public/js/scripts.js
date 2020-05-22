$(document).ready(function() {
  $('.greys-grid-screen').addClass('greys-invisible');
  $('h1').addClass('header-invisible');

  // user clicks button and the div moves
  $('#move-div').on('click', function() {
    $('.black, .white').addClass('animated').addClass('moved');
    setTimeout(function() {
      $('.black, .white').removeClass('animated').removeClass('moved');
    }, 1000);
    setTimeout(function() {
      nextScreen();
    }, 1000);
  })

  // greys-grid-screen
  function nextScreen() {
    $('body').addClass("bg-color two-color-bg");
    $('.greys-grid-screen').removeClass('greys-invisible');
    $('h1').removeClass('header-invisible');
    $('#two-divs-screen').addClass('boxes-invisible');
    $('#move-div').css('display', 'none');
  }

  for (let i = 0; i < greys.length; ++i) {
    $("#grey").append(`
      <div class='col-lg-1 col-md-2 col-sm 3 col-xs-4 ml-auto mr-auto'>
        <a href='${greys[i].href}' class='greybutton' style='background:${greys[i].backgroundColor}'>
          <span class='name'>${greys[i].name}</span>
        </a>
      </div>
    `);
  }; 

  return false;
});








 









