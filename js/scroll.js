$(document).ready(function(){
$(".nav ul li a[href^='#']").on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ 
              scrollTop: $(this.hash).offset().top - 230
          }, 600);
      });

});



   