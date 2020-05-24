$(document).ready(function() {
  $('.greys-grid-screen').addClass('greys-invisible');
  $('body').css('background-color', '#dfdfdf');
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
    $('body').css('background-color', '#fff');
  })

  // greys-grid-screen
  function nextScreen() {
    $('body').addClass("bg-color two-color-bg");
    $('.greys-grid-screen').removeClass('greys-invisible');
    $('h1').removeClass('header-invisible');
    $('#two-divs-screen').addClass('boxes-invisible');
    $('#move-div').css('display', 'none');
  }

  greys.forEach(function(grey) { 
    $("#grey").append(`
      <div class='col-lg-1 col-md-2 col-sm 3 col-xs-4 ml-auto mr-auto'>
        <a href='${grey.href}' class='greybutton' style='background:${grey.backgroundColor}'>
          <span class='name'>${grey.name}</span>
        </a>
      </div>
    `);

    let bg = grey.backgroundColor;
    switch (bg) {
      case bg[1] === "3" || bg[1] === "4" || bg[1] === "5":
        $('.greybutton a', this).css('color', '#fff');
        break;
      case bg[1] === "6" || bg[1] === "7":
        $('.greybutton a').css('color', '#dfdfdf');
        break;
      case bg[1] === "8" || bg[1] === "9" || bg[1] == "a" || bg[1] == "b":
        $('#grey a').css('color', '#333');
        break;
      case bg[1] === "c" || bg[1] === "d" || bg[1] === "e" || bg[1] === "f":
        $('.greybutton a').css('color', '#000');
        break;
      default:
    }  
    if (bg[1] === "f") {
      console.log($('#grey a', this));
    };
  }); 
  return false;
});








 









