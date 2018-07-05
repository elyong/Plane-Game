var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');

var canvasPadding;
if(CONFIG.canvasPadding>40)
	canvasPadding=40;
else if(CONFIG.canvasPadding<20)
	canvasPadding=20;
else
	canvasPadding=CONFIG.canvasPadding;