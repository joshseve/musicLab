$(document).ready(function(){
  $(".carousel").carousel();
  setInterval(function(){
    $('.carousel-slider').carousel({fullWidth:true});

      $('.carousel').carousel('next')
  },5000);
});
