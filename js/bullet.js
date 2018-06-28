var boomImage=new Image();
boomImage.src='img/boom.png';
//分别为怪兽消灭时的x，y轴坐标、怪兽的大小、怪兽数组monster[]中删除具体的发生爆炸的怪兽
var monsterClearX,monsterClearY,monsterSize,monsterDelete;

function Bullet(){
    this.x=plane.x+plane.width/2,
    this.y=plane.y,
    this.width=1,
    this.height=10,
    this.move=function(){
        if(this.y>=-10){
            this.y-=10;
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
    if(bullet.y<=460)
        context.clearRect(bullet.x-1,bullet.y,2,10);
    if(bullet.y<=-10)
        bullet=null;
    else{
        bullet.move();
        bullet.draw();
        for(let i=0;i<monster.length;i++){
            if(monster[i]===null)
                continue;
            if(!(bullet.x+bullet.width<monster[i].x)&&
                !(monster[i].x+Monster.prototype.size<bullet.x)&&
                !(bullet.y+bullet.height<monster[i].y)&&
                !(monster[i].y+Monster.prototype.size<bullet.y)){
                    score+=1;
                    context.clearRect(bullet.x-1,bullet.y,bullet.width+1,bullet.height);
                    bullet=null;
                    context.clearRect(monster[i].x,monster[i].y,Monster.prototype.size,Monster.prototype.size);
                    context.drawImage(boomImage,monster[i].x,monster[i].y,Monster.prototype.size,Monster.prototype.size);
                    monsterClearX=monster[i].x;
                    monsterClearY=monster[i].y;
                    monsterSize=Monster.prototype.size;
                    monsterDelete=function(){
                        monster.splice(i,1);
                    }
                    setTimeout("context.clearRect(monsterClearX,monsterClearY,monsterSize,monsterSize)",1000/60*3);
                    setTimeout(monsterDelete(),1000/60*3);
                    break;
            }
        }
        requestAnimationFrame(function(){
            bulletAnimate(bullet)
        });
    }
}