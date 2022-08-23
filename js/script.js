$(document).ready(function(){
  $('.main_btna').on('click', openModal); 
  $('.main_btn').on('click', openModal);
  $(' nav > ul li:eq(1)').on('click', openModal); 
  $('.close').on('click', closeModal);
 

  function openModal(){
    $('.overlay').animate({
        opacity: 'show'
    },300);
    $('.modal').slideToggle("slow");
  }
  function closeModal(){
    $('.overlay').animate({
        opacity: 'hide'
    },300);
    $('.modal').slideToggle("slow");

  }


    
});