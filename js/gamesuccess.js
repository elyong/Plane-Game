function gameSuccess(){
    if(score===7){
        plane=null;
        monster=null;
        bullet=null;
        context.clearRect(0,0,canvas.width,canvas.height);
        GAME.setStatus('all-success');
    }
    requestAnimationFrame(gameSuccess);
}