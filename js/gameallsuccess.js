function gameAllSuccess(){
    if(score===(allPassesLevel*startLevel+allPassesLevel*(allPassesLevel-1)/2)*numPerLine){
        plane=null;
        monster=null;
        bullet=null;
        presentLevel=startLevel;
        context.clearRect(0,0,canvas.width,canvas.height);
        document.getElementById('score2').innerHTML=score;
        GAME.setStatus('all-success');
    }
    requestAnimationFrame(gameAllSuccess);
}