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

$('#operacion').change(function(){
    if(this.checked){
        $('.more_options').fadeIn('slow');
        $('.more_options').addClass('show');
    }
    else{
        $('.more_options').fadeOut('slow');
        $('.more_options').removeClass('show');
    }
});

//Edición de mi perfil

$('#js-btn-user').click(function(e){
    e.preventDefault();
    toggleUser();
})

function toggleUser(){
    if( $('.js-form-user').hasClass('hidden') ){
        $( ".js-form-user" ).fadeIn("slow", function() {
             $( ".js-form-user" ).removeClass('hidden');
        });
    }
    else{
        $( ".js-form-user" ).fadeIn("slow", function() {
             $( ".js-form-user" ).addClass('hidden');
        });
    }
}

$('#js-btn-contraseña').click(function(e){
    e.preventDefault();
    toggleContraseña();
})

function toggleContraseña(){
    if( $('.js-form-contraseña').hasClass('hidden') ){
        $( ".js-form-contraseña" ).fadeIn("slow", function() {
             $( ".js-form-contraseña" ).removeClass('hidden');
        });
    }
    else{
        $( ".js-form-contraseña" ).fadeIn("slow", function() {
             $( ".js-form-contraseña" ).addClass('hidden');
        });
    }
}

$('#js-btn-datos').click(function(e){
    e.preventDefault();
    toggleDatos();
})

function toggleDatos(){
    if( $('.js-form-datos').hasClass('hidden') ){
        $( ".js-form-datos" ).fadeIn("slow", function() {
             $( ".js-form-datos" ).removeClass('hidden');
        });
    }
    else{
        $( ".js-form-datos" ).fadeIn("slow", function() {
             $( ".js-form-datos" ).addClass('hidden');
        });
    }
}

$('#js-btn-licencia').click(function(e){
    e.preventDefault();
    toggleLicencia();
})

function toggleLicencia(){
    if( $('.js-form-licencia').hasClass('hidden') ){
        $( ".js-form-licencia" ).fadeIn("slow", function() {
             $( ".js-form-licencia" ).removeClass('hidden');
        });
    }
    else{
        $( ".js-form-licencia" ).fadeIn("slow", function() {
             $( ".js-form-licencia" ).addClass('hidden');
        });
    }
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
}// toggleActionButtons