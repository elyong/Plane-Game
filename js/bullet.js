var boomImage=new Image();
boomImage.src=CONFIG.enemyBoomIcon;
//分别为怪兽消灭时的x，y轴坐标
var monsterClearX=[],monsterClearY=[];

var bulletSize;
if(CONFIG.bulletSize<5)
    bulletSize=5;
else if(CONFIG.bulletSize>20)
    bulletSize=20;
else
    bulletSize=CONFIG.bulletSize;

var bulletSpeed;
if(CONFIG.bulletSpeed<2)
    bulletSpeed=2;
else if(CONFIG.bulletSpeed>20)
    bulletSpeed=20;
else
    bulletSpeed=CONFIG.bulletSpeed;

function Bullet(){
    this.x=plane.x+plane.width/2,
    this.y=plane.y,
    this.width=1,
    this.height=bulletSize,
    this.move=function(){
        if(this.y>=-10){
            this.y-=bulletSpeed;
        }
    },
    this.draw=function(){
        context.beginPath();
        context.moveTo(this.x,this.y);
        context.lineTo(this.x,this.y+this.height);
        context.lineWidth=this.width;
        context.strokeStyle='white';
        context.stroke();
        context.closePath();
    }
}
function bulletAnimate(bullet){
    if(bullet===null||plane===null)
        return;
    if(bullet.y<=600-plane.height-canvasPadding-bullet.height)
        context.clearRect(bullet.x-1,bullet.y,2,bullet.height);
    if(bullet.y<=-bullet.height)
        bullet=null;
    else{
        bullet.move();
        bullet.draw();
        for(let i=0;i<monster.length;i++){
            if(monster[i]===null)
                continue;
            if(!(bullet.x+bullet.width<monster[i].x)&&
                !(monster[i].x+monsterSize<bullet.x)&&
                !(bullet.y+bullet.height<monster[i].y)&&
                !(monster[i].y+monsterSize<bullet.y)){
                    score+=1;
                    context.clearRect(bullet.x-1,bullet.y,bullet.width+1,bullet.height);
                    bullet=null;
                    monsterClearX.push(monster[i].x);
                    monsterClearY.push(monster[i].y);
                    context.clearRect(monster[i].x,monster[i].y,monsterSize,monsterSize);
                    context.drawImage(boomImage,monster[i].x,monster[i].y,monsterSize,monsterSize);                   
                    monster.splice(i,1);
                    setTimeout(function(){
                        for(var i=0;i<monsterClearX.length;i++){
                            context.clearRect(monsterClearX[i],monsterClearY[i],monsterSize,monsterSize)
                        }
                    },1000/60*3);
                    break;
            }
        }
        requestAnimationFrame(function(){
            bulletAnimate(bullet)
        });
    }
}