var sectionArray = [
    1, 2, 3, 4, 5,6,7,8
];

var sections = [
    'inicio',
    'informacion',
    'tratamientos',
    'autodiagnostico',
    'modelo',
    'instalaciones',
    'nosostros',
    'contacto',
];

$.each(sections, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' +  value).offset().top - 86;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' +  value).offset().top - 86;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});