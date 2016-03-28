// menu mobile

 $('#js-btn-nav a').click(function(e){
    e.preventDefault();
    toggleTwitter();
})

$('#js-hide-twitter').on('click', function(event){
    event.preventDefault();
    console.log('entro');
    toggleTwitter();
})

function toggleTwitter(){
    if( $('.nav-mobile').hasClass('js-hidden') ){
        $( ".nav-mobile" ).animate({
            right: "0"
        }, 500, function() {
            $( ".nav-mobile" ).removeClass('js-hidden');
        });

        return;
    }

    $( ".nav-mobile" ).animate({
        right: "-310"
    }, 500, function() {
        $( ".nav-mobile" ).addClass('js-hidden');
    });
}