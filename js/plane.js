var planeImage=new Image();
planeImage.src=CONFIG.planeIcon;

var planeSpeed;
if(CONFIG.planeSpeed>5)
	planeSpeed=5;
else if(CONFIG.planeSpeed<2)
	planeSpeed=2;
else
	planeSpeed=CONFIG.planeSpeed;

var planeWidth,planeHeight;
if(CONFIG.planeSize.width>90)
	planeWidth=90;
else if(CONFIG.planeSize.width<30)
	planeWidth=30;
else
	planeWidth=CONFIG.planeSize.width;
if(CONFIG.planeSize.height>100)
	planeHeight=100;
else if(CONFIG.planeSize.height<50)
	planeHeight=50;
else
	planeHeight=CONFIG.planeSize.height;

function Plane(){
    this.x=320,
    this.y=600-100-canvasPadding,
    this.width=planeWidth,
    this.height=planeHeight,
    this.direction='',
    this.draw=function(){
    	context.clearRect(this.x-5,this.y,this.width+10,this.height);
        context.drawImage(planeImage,this.x,this.y,this.width,this.height);
    }
};
var plane=new Plane();
var planeMove=setInterval(function(){
    if(plane===null)
        return;
    else if(document.getElementById('game').getAttribute('data-status')==='playing')
    	plane.draw();
    if (plane.direction === 'right') {
        if (plane.x <= 700-plane.width-canvasPadding) {
        	plane.x += planeSpeed;
            plane.draw();
        }
    } else if(plane.direction==='left'){
        if (plane.x >= canvasPadding) {
            plane.x -= planeSpeed;
            plane.draw();
        }
    }
},1000/60);