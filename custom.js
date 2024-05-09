// painting
$(document).ready(function() {
    $('.painting').hover(function() {
      var currentIndex = $(this).index(); 
      $('.painting').each(function(index) {
        if (index < currentIndex) { 
          $(this).css('transform', 'translateX(-100px)'); 
        } else if (index > currentIndex) { 
          $(this).css('transform', 'translateX(100px)');
        }
      });
      $(this).css('transform', 'scale(1.7)'); 
    }, function() {
      $('.painting').css('transform', '');
    });
  });

  