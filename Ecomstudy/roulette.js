$(function()

{
$('#start').click(function(){
var flag=0;
  setInterval(function(){
  if (flag==0){
  $('.one').css( 'background','#CCC');
  flag=1;
  } else {
  $('.one').css( 'background','#FF0');
  flag=0;
  }
  },1000);
  });
});
