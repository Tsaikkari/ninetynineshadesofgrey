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

  for (let i = 0; i < greys.length; ++i) {
    $("#grey").append(`
      <div class='col-lg-1 col-md-2 col-sm 3 col-xs-4 ml-auto mr-auto' greybuttons>
        <a href='${greys[i].href}' class='greybutton' style='background:${greys[i].backgroundColor}'>
          <span class='name'>${greys[i].name}</span>
        </a>
      </div>
    `);
  }; 

  /*greys.forEach(function(grey) { 
    $("#grey").append(`
      <div class='col-lg-1 col-md-2 col-sm 3 col-xs-4 ml-auto mr-auto greys-container'>
        <a href='${grey.href}' class='greybutton' style='background:${grey.backgroundColor}'>
          <span class='name'>${grey.name}</span>
        </a>
      </div>
    `);
    
  /*let bigButtonPeople = (greys.slice(96));
  let greyElement = $('.greys-container a');
  bigButtonPeople.map(function(bigButtonPerson) {
    bigButtonPerson.name = bigButtonPerson.name.toLowerCase();
    if (bigButtonPerson.name === 'brahms' || bigButtonPerson.name === 'beethoven' || bigButtonPerson.name === 'bach') {
      greyElement.addClass(bigButtonPerson.name + '-button');
      $('.brahms-button').css({'width': '17.6rem', 'margin': '0 auto'});
      $('.beethoven-button').css({'width': '17.6rem', 'margin': '0 auto'});
      $('.bach-button').css('width', '17.6rem');
    } else {
      greyElement.removeClass(bigButtonPerson.name + '-button');
    }
  });*/
  return false;
});









 









