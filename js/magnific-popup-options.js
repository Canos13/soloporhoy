$(document).ready(function() {

  var magnifPopup = function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });
  };
  

  magnifPopup();

});