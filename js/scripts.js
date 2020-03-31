$(document).ready(function() {
  $('#greys-grid-screen').css('display', 'none');
  $('#divs-together-screen').css('display', 'none');
  $('h2').css('display', 'none');

  // user clicks button and the divs move
  $('#move-div').on('click', function() {
    if ($('body').css('max-width') < 600 + "px") { // TODO: divs should move vertical when smaller screen
      $('.black,.white').addClass('move-vertical');
      setTimeout(function() {
        greyScreen();
        $('.black,.white').removeClass('move-vertical');
      }, 500);
      setTimeout(function() {
        buttonScreen();
      }, 1500);
    } else {
      $('.black,.white').addClass('move-horizontal');
      setTimeout(function() {
        greyScreen();
        $('.black,.white').removeClass('move-horizontal');
      }, 500);
      setTimeout(function() {
        buttonScreen();
      }, 1500);
    }
  });

  // div-above-another-screen
  function greyScreen() {
    $('h2').css('display', 'none');
    $('#greys-grid-screen').css('display', 'none');
    $('#two-divs-screen').css('display', 'none');
    $('#move-div').css('display', 'none');
    $('#greyclip').css('display', 'none');
    $('#divs-together-screen').css('display', 'block');
    $('.two-divs-in-one').addClass('animated');
  }

  // greys-grid-screen
  function buttonScreen() {
    $('body').css('background-color', '#ccccff');
    $('h2').css('display', 'block');
    $('#greys-grid-screen').css('display', 'block');
    $('#two-divs-screen').css('display', 'none');
    $('#divs-together-screen').css('display', 'none');
    $('#move-div').css('display', 'none');
    $('#greyclip').css('display', 'block');
  }
  
  for (let i = 0; i < greys.length; ++i) {
    $("#grey").append(`<div class='col-sx-6 col-sm-4 col-md-1 ml-auto mr-auto'><a href='${greys[i].href}' class='greybutton' style='background:${greys[i].backgroundColor}'><span class='name'>${greys[i].name}</span></a></div>`);
    /* TODO: fix this
    if (greys[i].backgroundColor.parseInt(backgroundColor[1], 10) < 5) {
      $('.greybutton').css('color', '#fff');
    } else {
      $('.greybutton').css('color', '#000');
    }*/
  };  

  return false;
});








 









