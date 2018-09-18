var app = {
 permission: true,
 initialize: function(){ document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);},
 onDeviceReady: function() {
     var self = this;
     window.plugins.speechRecognition.hasPermission(
     function(permission){
         if(!permission){
             window.plugins.speechRecognition.requestPermission(
             function(permissionTrue){
                 self.permission = true;
                 if(permissionTrue == 'OK'){
                    alert("Permissao de acesso a comando de voz aceita com sucesso!");
                 }
                 else{
                    alert("Permissao de acesso a comando de voz negada!");
                 }
             },
             function(erro){
                 self.permission = false;
                 alert("erro na permissao"+erro);
             });
         }
     },
     function(error){
         alert("erro");
         alert(error);
     });
 },
 stopCommand:function (){
     window.plugins.speechRecognition.stopListening(
             function(){
                 alert("Comando de voz desativado!");
                 var text = "";
                 $("#texto").html("").append(text);
             },
             function(){
                 alert("erro");
             });
 },
 voiceCommand:function(){
     var self = this;
     if(!self.permission){
         alert("Sem permissão para usar o microfone");
         return false;
     }
     var options = { language: "pt-BR", showPartial: true, showPopup: false}; 
     window.plugins.speechRecognition.startListening(
     function(dados){
         $.each(dados,function(key,texto){
             $("#texto").html("").append(texto);
             if(texto == "acender luzes"){
                window.plugins.flashlight.switchOn();
             }
             else if(texto == "apagar luzes"){
                window.plugins.flashlight.switchOff();
             }
             else if(texto == "temporizador"){
                setTimeout(function() {
                    window.plugins.flashlight.switchOn();
                  }, 3000);
             }
             else if(texto == "motor"){
                navigator.vibrate(8000);
             }
            else if(texto == "fechar"){
                navigator.app.exitApp();
             }
         });
     },
     function(erro){
         alert("erro: "+erro);
     },options);
 },
 isAbaliable: function(){
     window.plugins.speechRecognition.isRecognitionAvailable(
     function(data){
        alert("sucesso!");
        alert(data);
     },
     function (error){
        alert("Comando de voz nao encontrado\n Por favor repita o comando!");
        alert(error);
     }
     );
 }
};
app.initialize();