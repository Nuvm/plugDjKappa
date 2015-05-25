$("input[type=button]").attr("disabled", "disabled");

$('body').append('<div type="button" onclick="rmv()" style="position:absolute; top:90px; right: 355px; height: 200px; width: 250px; background-color: black; border: 2.5px solid white; border-radius: 20px; opacity: .8; z-index: 200;">Ultimate Kappa Button</div>');
function rmv(){
  $('body').remove();
  $('head').append('<body><div style="font-size=5000%; height: 500px; width: 1000px; background-color: black; opacity: .8;">KAPPA ULTED</div></body>');
}
