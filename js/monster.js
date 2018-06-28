var monsterImage=new Image();
monsterImage.src='img/enemy.png';

var monster=new Array();
function Monster(x,y,direction,num){
      this.x=x;
      this.y=y;
      this.direction=direction;
      this.num=num;
}
Monster.prototype.size=50;
Monster.prototype.move=function(){
  if(this.direction==='right'){
    if(monster[monster.length-1].x<=620)
      this.x+=2;
    else{
      this.y+=50;
      this.direction='left';
    }
  }else{
    if(monster[monster.length-1].x-(monster[monster.length-1].num-monster[0].num)*60>=30)
      this.x-=2;
    else{
      this.y+=50;
      this.direction='right';
    }
  }
};
Monster.prototype.draw=function(){
  context.drawImage(monsterImage,this.x,this.y,this.size,this.size);
};
function monsterAnimate(){
  if(monster===null)
    return;
  for(var i=0;i<monster.length;i++){
    context.clearRect(monster[i].x,monster[i].y,Monster.prototype.size,Monster.prototype.size)
    monster[i].move();
    monster[i].draw();
  }
  requestAnimationFrame(monsterAnimate);
}
for(var i=0;i<7;i++){
  monster[i]=new Monster(30+i*(50+10),30,'right',i);
  monster[i].draw();
}