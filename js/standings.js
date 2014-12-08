$( document ).ready(function() {
    
    $('#div2Btn').click(function(){
  $("#standings2").removeClass('hide');
  $("#standings1").addClass('hide');
  $("#standings3").addClass('hide');
});
    
     $('#div1Btn').click(function(){
  $("#standings1").removeClass('hide');
  $("#standings2").addClass('hide');
  $("#standings3").addClass('hide');
});
    
     $('#div3Btn').click(function(){
  $("#standings3").removeClass('hide');
  $("#standings1").addClass('hide');
  $("#standings2").addClass('hide');
});
    
    $('#div2BtnWomens').click(function(){
  $("#standings2Womens").removeClass('hide');
  $("#standings1Womens").addClass('hide');
  $("#standings3Womens").addClass('hide');
});
    
     $('#div1BtnWomens').click(function(){
  $("#standings1Womens").removeClass('hide');
  $("#standings2Womens").addClass('hide');
  $("#standings3Womens").addClass('hide');
});
    
     $('#div3BtnWomens').click(function(){
  $("#standings3Womens").removeClass('hide');
  $("#standings1Womens").addClass('hide');
  $("#standings2Womens").addClass('hide');
});
    
});
