// menu mobile
 $('#js-btn-nav').click(function(e){
    e.preventDefault();
    toggleTwitter();
})

$('#js-hide-nav').on('click', function(event){
    event.preventDefault();
    console.log('entro');
    toggleTwitter();
})


$('#agricola').change(function(){
    if(this.checked){
        $('.more_options').fadeIn('slow');
        $('.more_options').addClass('show');
    }
    else{
        $('.more_options').fadeOut('slow');
        $('.more_options').removeClass('show');
    }
});

$('#industrial').change(function(){
    if(this.checked){
        $('.more_options2').fadeIn('slow');
        $('.more_options2').addClass('show');
    }
    else{
        $('.more_options2').fadeOut('slow');
        $('.more_options2').removeClass('show');
    }
}); 

function toggleTwitter(){
    if( $('.nav-mobile').hasClass('js-hidden') ){
        $( ".nav-mobile" ).animate({
            right: "0"
        }, 700, function() {
            $( ".nav-mobile" ).removeClass('js-hidden');
            $( "body" ).addClass('overflow-hidden');
        });

        return;
    }

    $( ".nav-mobile" ).animate({
        right: "-767"
    }, 700, function() {
        $( ".nav-mobile" ).addClass('js-hidden');
        $( "body" ).removeClass('overflow-hidden');
    });
}

//Footer

function footerBottom(){
    var alturaFooter = getFooterHeight();
    $('.main').css('padding-bottom', alturaFooter );
}

/*------------------------------------*\
    #GET/SET FUNCTIONS
\*------------------------------------*/

/**
 * Get header's height
 */
function getHeaderHeight(){
    return $('.js-header').outerHeight();
}// getHeaderHeight

/**
 * Get footer's height
 */
function getFooterHeight(){
    return $('footer').outerHeight();
}// getFooterHeight