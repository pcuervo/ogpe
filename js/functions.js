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

//checkbox pus

$('.js-operacion-agricola').change(function(){
    if(this.checked){
        $('.js-usos-operacion-agricola').fadeIn('slow');
        $('.js-usos-operacion-agricola').addClass('show');
    }
    else{
        $('.js-usos-operacion-agricola').fadeOut('slow');
        $('.js-usos-operacion-agricola').removeClass('show');
    }
});

$('.js-operacion-comercial').change(function(){
    if(this.checked){
        $('.js-usos-operacion-comercial').fadeIn('slow');
        $('.js-usos-operacion-comercial').addClass('show');
    }
    else{
        $('.js-usos-operacion-comercial').fadeOut('slow');
        $('.js-usos-operacion-comercial').removeClass('show');
    }
});

$('.js-operacion-industrial').change(function(){
    if(this.checked){
        $('.js-usos-operacion-industrial').fadeIn('slow');
        $('.js-usos-operacion-industrial').addClass('show');
    }
    else{
        $('.js-usos-operacion-industrial').fadeOut('slow');
        $('.js-usos-operacion-industrial').removeClass('show');
    }
});

$('.js-operacion-institucional').change(function(){
    if(this.checked){
        $('.js-usos-operacion-institucional').fadeIn('slow');
        $('.js-usos-operacion-institucional').addClass('show');
    }
    else{
        $('.js-usos-operacion-institucional').fadeOut('slow');
        $('.js-usos-operacion-institucional').removeClass('show');
    }
});

$('.js-operacion-residencial').change(function(){
    if(this.checked){
        $('.js-usos-operacion-residencial').fadeIn('slow');
        $('.js-usos-operacion-residencial').addClass('show');
    }
    else{
        $('.js-usos-operacion-residencial').fadeOut('slow');
        $('.js-usos-operacion-residencial').removeClass('show');
    }
});

$('.js-operacion-telecomunicaciones').change(function(){
    if(this.checked){
        $('.js-usos-operacion-telecomunicaciones').fadeIn('slow');
        $('.js-usos-operacion-telecomunicaciones').addClass('show');
    }
    else{
        $('.js-usos-operacion-telecomunicaciones').fadeOut('slow');
        $('.js-usos-operacion-telecomunicaciones').removeClass('show');
    }
});

$('.js-operacion-turistico').change(function(){
    if(this.checked){
        $('.js-usos-operacion-turistico').fadeIn('slow');
        $('.js-usos-operacion-turistico').addClass('show');
    }
    else{
        $('.js-usos-operacion-turistico').fadeOut('slow');
        $('.js-usos-operacion-turistico').removeClass('show');
    }
});

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

/**
 * Get the scrolled pixels in Y axis
 */
function getScrollY() {
    return $(window).scrollTop();
}// getScrollY

/**
 * Toggle action buttons
 */
 function toggleHeaderScrolled(){

    //Get the header height so we can now when
    //to change the heade state
    var headerHeight = getHeaderHeight();
    //Scrolled pixels in Y axis
    var sy = getScrollY();
    //Compare the two numbers, when they are the same or less
    //add fixed class to the header.
    //130 --> Altura pasos, etapas y h1
    if ( sy >= headerHeight + 130 ) {
        $('.order_review').addClass('scrolled');
    } else {
        $('.order_review').removeClass('scrolled');
    }
}// toggleActionButtons

/**
 * Toggle action buttons
 */
 function toggleButtonsScrolled(){

    //Get the header height so we can now when
    //to change the heade state
    var headerHeight = getHeaderHeight();
    //Scrolled pixels in Y axis
    var sy = getScrollY();
    //Compare the two numbers, when they are the same or less
    //add fixed class to the header.

    if(  sy >= headerHeight ){
        $( ".btn-accesibilidad" ).animate({
        top: "20"
        }, 300);
        return;
    }else {
        $( ".btn-accesibilidad" ).animate({
            top: "125"
        }, 300);
        return;
    }
}// toggleActionButtons

function actionButtons(){
    $('#incfont').click(function(){
    curSize= parseInt($('.size-transform *').not('h1, h2, h3, .size-static *, .icon').css('font-size')) + 2;
    if(curSize<=23)
    $('.size-transform *').not('h1, h2, h3, .size-static *, .icon').css('font-size', curSize);
    });
    $('#decfont').click(function(){
    curSize= parseInt($('.size-transform *').not('h1, h2, h3, .size-static *, .icon').css('font-size')) - 2;
    if(curSize>=17)
    $('.size-transform *').not('h1, h2, h3, .size-static *, .icon').css('font-size', curSize);
    });
}// actionButtons