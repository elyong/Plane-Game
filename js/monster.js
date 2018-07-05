var monsterImage=new Image();
monsterImage.src=CONFIG.enemyIcon;

var monster=new Array();
var maxNum,minNum;
var numPerLine=CONFIG.numPerLine;
if(numPerLine<1)
  numPerLine=1;
else if(numPerLine>7)
  numPerLine=7;
else numPerLine=CONFIG.numPerLine;

var monsterSpeed;
if(CONFIG.enemySpeed>5)
  monsterSpeed=5;
else if(CONFIG.enemySpeed<1)
  monsterSpeed=1;
else
  monsterSpeed=CONFIG.enemySpeed;

var monsterSize;
if(CONFIG.enemySize>60)
  monsterSize=60;
else if(CONFIG.enemySize<30)
  monsterSize=30;
else
  monsterSize=CONFIG.enemySize;

var monsterGap;
if(CONFIG.enemyGap>30)
  monsterGap=30;
else if(CONFIG.monsterGap<5)
  monsterGap=5;
else
  monsterGap=CONFIG.enemyGap;

var monsterDirection;
if(CONFIG.enemyDirection==='left')
  monsterDirection='left';
else
  monsterDirection='right';

function Monster(x,y,direction,num){
      this.x=x;
      this.y=y;
      this.direction=direction;
      this.num=num;
}
Monster.prototype.move=function(){
  if(this.direction==='right'){
    maxNum=0;
    for(var i=0;i<monster.length;i++){
      if(monster[i].num>maxNum)
        maxNum=monster[i].num;
    }
    if(monster[monster.length-1].x+(monsterGap+monsterSize)*(maxNum-monster[monster.length-1].num)<=700-monsterSize-canvasPadding)
      this.x+=monsterSpeed;
    else{
      this.y+=50;
      this.direction='left';
    }
  }else if(this.direction==='left'){
    minNum=numPerLine;
    for(var i=monster.length-1;i>=0;i--){
      if(monster[i].num<minNum)
        minNum=monster[i].num;
    }
    if(monster[monster.length-1].x-(monster[monster.length-1].num-minNum)*(monsterGap+monsterSize)>=canvasPadding)
      this.x-=monsterSpeed;
    else{
      this.y+=50;
      this.direction='right';
    }
  }
};
Monster.prototype.draw=function(){
  context.drawImage(monsterImage,this.x,this.y,monsterSize,monsterSize);
};
function monsterAnimate(){
  if(monster===null)
    return;
  for(var i=0;i<monster.length;i++){
    context.clearRect(monster[i].x,monster[i].y,monsterSize,monsterSize)
    monster[i].move();
    monster[i].draw();
  }
  requestAnimationFrame(monsterAnimate);
}