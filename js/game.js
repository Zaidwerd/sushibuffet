$(function() {

  function animatebeltTop() {
  $('#flexPlateTop').css('right', $('#flexPlateTop').width).animate({
  'right': $('body').width()}, 9000);
  }

  function animatebeltBottom() {
  $('#flexPlateBottom').css('left', $('#flexPlateBottom').width).animate({
  'left': $('body').width()}, 9000);
  }


  animatebeltTop();
  animatebeltBottom();
});
