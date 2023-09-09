var canvas = document.getElementById("cnv");
    var context = canvas.getContext("2d");
    var imageObj = new Image(2500, 1769);
    var textString;
    var textWidth;

	var dt2;
let certificate = "#"+(Math.floor(Date.now()/1000)).toString(16);
//




//
async function shareCanvas() {
  const canvasElement = document.getElementById('mycanvasid');
  const dataUrl = canvas.toDataURL();
  const blob = await (await fetch(dataUrl)).blob();
  const filesArray = [
    new File(
      [blob],
      'certificate.png',
      {
        type: blob.type,
        lastModified: new Date().getTime()
      }
    )
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
}
//


document.getElementById("sharebttn").addEventListener('click', (e)=>{
e.preventDefault();
    shareCanvas();
})


    imageObj.onload = function(){
        context.drawImage(imageObj, 0, 0);
    };
    imageObj.src = "./img/certificate.jpg"; 
document.getElementById("fio-submit").addEventListener("click", (e)=>{
    e.preventDefault();
    drawCertificate(document.getElementById("fio-input").value)
    document.getElementById("fio-submit").classList.add("hidden-cert");
    document.getElementById("sharebttn").classList.remove("hidden-cert");
    document.getElementById("dl").classList.remove("hidden-cert");
  })

function drawCertificate(text){
    context.drawImage(imageObj, 0, 0);
    context.font = "bold 90pt Calibri";
    textString = text;
    textWidth = context.measureText(textString ).width;
    context.fillText(textString , (canvas.width/2) - (textWidth / 2), 885);
	 context.font = "bold 64px Calibri";
    context.fillText(certificate, (canvas.width/2) - (context.measureText(certificate).width / 2), 1745);
}

function dlCanvas() {
    var dt = canvas.toDataURL('image/png');
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
    this.href = dt;
	//dt2 = dt;
  };
  document.getElementById("dl").addEventListener('click', dlCanvas, false);


document.addEventListener('DOMContentLoaded', function(){
    
})


var oneday = 86400;//60*60*24
var currentDate = new Date();


var params = window.location.search.replace('?','').split('&').reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

var date2 = params['data'];
//alert(date2);
var days = Math.floor(((currentDate.getTime()/1000)-parseInt(date2))/oneday);
//alert(days);
 if(days === 0){
  // alert("today")
  }
 else{
   alert("Недействительная ссылка")
	window.location = "index.html"
 }
//

   


 