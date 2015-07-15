/**
 ** Fragment scrolling **
                       **/
$(document).ready(function(){
  $('a[href*=#]').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top -100;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
        return false;
      }
    }
  });
});

/**
 ** Navbar/menu collapse **
                         **/
$('.dropdown-menu a').click(function() {
  $('.dropdown-menu').prev().dropdown('toggle');
});
$('.navbar-collapse a').click(function(e){
  if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
    $('.navbar-collapse').collapse('toggle');
  }
});

//Read more button
$('.collapse').on('hidden.bs.collapse', function () {
  $('.collapser').addClass('collapsed');
}).on('shown.bs.collapse', function () {
  $('.collapser').removeClass('collapsed');
});

/**
 ** Scroll-to-top **
                  **/
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200){
      $('.navbar').css({'padding': '5px 0'});
      $('.scroll-to-top').fadeIn();
    } else {
      $('.navbar').css({'padding': '15px 0'});
      $('.scroll-to-top').fadeOut();
    }
  });
});