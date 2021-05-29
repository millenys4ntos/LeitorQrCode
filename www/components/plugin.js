// This is a JavaScript file

$(document).on("click","#codigo", function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("Leitura efetuada com sucesso");
      },
      function (error) {
          alert("Ocorreu algum erro: " + error);
      },
      {
          preferFrontCamera : false, 
          showFlipCameraButton : true, 
          showTorchButton : true,
          torchOn: true, 
          saveHistory: true, 
          prompt : "Place a barcode inside the scan area", 
          resultDisplayDuration: 500, 
          formats : "QR_CODE,PDF_417, CODE_39", 
          orientation : "landscape",
          disableAnimations : true, 
          disableSuccessBeep: true 
      }
   );
});