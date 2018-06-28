context.fillStyle='white';
context.font='18px 黑体';

var score=0;
function scoreCount(){
  context.clearRect(0,0,canvas.width,20);
  //游戏结束
  if(plane===null){
    document.getElementById('score2').innerHTML=score;
    score=0;
    return;
  }
  context.fillText("分数："+score,20,20);
  requestAnimationFrame(scoreCount);
}