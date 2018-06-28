function gameOver(){
    if(plane===null)
        return;
    for(let i=0;i<monster.length;i++){
        if(!(plane.x+plane.width<monster[i].x)&&
           !(monster[i].x+Monster.prototype.size<plane.x)&&
           !(plane.y+plane.height<monster[i].y)&&
           !(monster[i].y+Monster.prototype.size<plane.y)){
            context.clearRect(0,0,canvas.width,canvas.height);
            plane=null;
            monster=null;
            bullet=null;
            document.getElementById('score1').innerHTML=score;
            GAME.setStatus('failed');

            return;
        }
        if(monster[i].y+Monster.prototype.size>=600){
            plane=null;
            monster=null;
            bullet=null;
            context.clearRect(0,0,canvas.width,canvas.height);
            document.getElementById('score1').innerHTML=score;
            GAME.setStatus('failed');

            return;
        }
    }
    requestAnimationFrame(gameOver);
}