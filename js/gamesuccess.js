var presentLevel,startLevel;
if(CONFIG.level<1){
	presentLevel=1;
	startLevel=1;
}
else if(CONFIG.level>6){
	presentLevel=6;
	startLevel=6;
}
else{
	presentLevel=CONFIG.level;
	startLevel=CONFIG.level;
}
var passCountLevel;

var presentTotalLevel;
if(CONFIG.totalLevel<CONFIG.level)
	presentTotalLevel=startLevel
else if(CONFIG.totalLevel>6)
    presentTotalLevel=6
else if(CONFIG.totalLevel<1)
	presentTotalLevel=1
else
	presentTotalLevel=CONFIG.totalLevel
var allPassesLevel=presentTotalLevel-startLevel+1;

function gameSuccess(){
	passCountLevel=presentLevel-startLevel+1
    if(score===(passCountLevel*startLevel+passCountLevel*(passCountLevel-1)/2)*numPerLine&&passCountLevel!==allPassesLevel){
        plane=null;
        monster=null;
        bullet=null;
        presentLevel++;
        document.getElementById('level2').innerHTML=presentLevel;
        context.clearRect(0,0,canvas.width,canvas.height);
        GAME.setStatus('success');
    }
    requestAnimationFrame(gameSuccess);
}