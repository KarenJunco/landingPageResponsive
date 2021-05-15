$(window).on("scroll", function() { //en la ventana principal se va a generar un evento cada vez que hagamos scroll

    if ($(".navbar").offset().top > 40) { //donde la clase navbar la clase top sea mayor a 40
       $(".navbar").addClass("navbar-fixed");
       $(".go-top").show();
 
    } else {
       $(".navbar").removeClass("navbar-fixed");//caso contrario se va a remover esa clase 
       $(".go-top").hide();
 
    }
 })

 $(document).ready(function() {
   var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
   });

   $('#portfolio-filters li').on('click', function() {
      $("#portfolio-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
         filter: $(this).data('filter')
      });
   });

   $('.popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      gallery: {
         enabled: true,
         navigateByImgClick: true
      }
   });

   $("#navbarNav").on('show.bs.collapse', function() {

      $(".navbar").addClass("navbar-fixed");

      $('a.nav-link, a.btn-custom').click(function() {
         $("#navbarNav").collapse('hide');
      });
   });


});
