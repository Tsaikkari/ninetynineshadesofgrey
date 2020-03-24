// user clicks button and the divs move
$('#move').on('click', function() {
    $('.greys-grid-screen').css('display', 'none');
    $('.black, .white').addClass('animated').addClass('moved');
    setTimeout(function() {
        $('.black, .white').removeClass('animated').removeClass('moved');
    }, 1000);
    $('.greys-grid-screen').css('display', 'block'); 
    //$('.two-divs-screen').css('display', 'none');
});







