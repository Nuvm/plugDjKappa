$("input[type=button]").attr("disabled", "disabled");
API.on(API.CHAT,chatLog);
function chatLog(){
  API.chatLog(":kappa:");
}
