$(function(){
  $(".mark").mouseenter(function(){
    $(".tooltip2").stop().fadeIn(500);
  });
  $(".mark").mouseleave(function(){
    $(".tooltip2").stop().fadeOut(500);
  });
});
