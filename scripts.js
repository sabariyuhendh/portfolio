function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
function openPdf() {
  // Specify the path to your PDF file
  var pdfPath = 'path/to/your/pdf/document.pdf';
  
  // Open the PDF in a new window/tab
  window.open(pdfPath, '_blank');
}
