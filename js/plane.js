var planeImage=new Image();
planeImage.src='img/plane.png';

function Plane(){
    this.x=320,
    this.y=470,
    this.width=60,
    this.height=100,
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
    if (plane.direction === 'right') {
        if (plane.x <= 610) {
        	plane.x += 5;
            plane.draw();
        }
    } else if(plane.direction==='left'){
        if (plane.x >= 30) {
            plane.x -= 5;
            plane.draw();
        }
    }
},1000/60);