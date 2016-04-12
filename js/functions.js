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

//Checkbox PUS

function show_usos(tipoOperacion){
    console.log(  );
    $('.js-usos-'+tipoOperacion).fadeIn('slow');
    $('.js-usos-'+tipoOperacion).addClass('show');
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
}// toggleHeaderScrolled

function actionButtons(){
    $('#incfont').click(function(){
    curSize= parseInt($('.size-transform *').not('h1, h2, h3, .size-static *, .icon').css('font-size')) + 2;
    if(curSize<=23)
    $('.size-transform *').not('h1, h2, h3, .size-static *, .icon').css('font-size', curSize);
    });
    $('#decfont').click(function(){
    curSize= parseInt($('.size-transform *').not('h1, h2, h3, .size-static *, .icon').css('font-size')) - 2;
    if(curSize>=15)
    $('.size-transform *').not('h1, h2, h3, .size-static *, .icon').css('font-size', curSize);
    });
}// actionButtons

//Masonry

function init_masonry(){
    var $container = $('#content');

    $container.masonry({
      itemSelector: '.box-content',
      isAnimated: true
    });
}

function layout_masonry(){

    var $container = $('#content');
    $container.masonry('layout');
    console.log('layout');

}