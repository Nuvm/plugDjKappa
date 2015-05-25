$('body').append('<div id="kappaButton" type="button" onclick="rmv()" style="position:absolute; top:90px; right: 355px; height: 200px; width: 250px; background-color: black; border: 2.5px solid white; border-radius: 20px; opacity: .8; z-index: 200;">Ultimate Kappa Button</div>');
$('#kappaButton').hover(function(){$('#kappaButton').css("cursor","pointer");},function(){$('#kappaButton').css("cursor","auto");});
function rmv(){
  $('#kappaButton').text("THE KAPPA WILL ULT IN 5 SECONDS!!!!" + <br> + "PREPARE, FUCKING PLEB");
  setTimeout(function(){$('#kappaButton').text("jk the kappa will just delete this page");},5100);
  setTimeout(function(){$('#kappaButton').text("HERE WE GO FUCKERS");},7100);
  setTimeout(function(){$('body').remove();},8000);
}
