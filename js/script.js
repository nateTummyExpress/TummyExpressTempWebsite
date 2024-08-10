
(function ($) {
  'use strict';

  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });
 

})(jQuery);

$('#signButton').click(function(){
  $('#hiddenForm').show();
});

/* Google form mobile */
@media screen and (max-width:767px) {
iframe[src*="google.com/forms"] {
    width: 100% !important;
    height: 800px;
}
}