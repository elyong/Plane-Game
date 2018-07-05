// 元素
var container = document.getElementById('game');

//动画的浏览器兼容检查
window.requestAnimFrame =
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) {
  window.setTimeout(callback, 1000 / 60);
};

//记录按键
var keyboard=new Array();
/**
 * 整个游戏对象
 */
var GAME = {
  /**
   * 初始化函数,这个函数只执行一次
   * @param  {object} opts 
   * @return {[type]}      [description]
   */
  init: function(opts) {
    document.getElementById('level1').innerHTML=presentLevel;
    document.getElementById('level2').innerHTML=presentLevel;
    document.getElementById('score2').innerHTML=score;
    this.bindEvent();
  },
  bindEvent: function() {
    var self = this;
    var playBtn = document.querySelector('.js-play');
    var nextBtn=document.querySelector('.js-next');
    var replayBtn=document.querySelectorAll('.js-replay');
    // 开始游戏按钮绑定
    playBtn.onclick = function() {
      self.play();
    };
    nextBtn.onclick=function(){
      self.play();
    }
    replayBtn[0].onclick=function(){
      self.play();
    }
    replayBtn[1].onclick=function(){
      self.play();
    }
    this.setStatus(CONFIG.status);
  },
  play: function() {
    this.setStatus('playing');
  },
  /**
   * 更新游戏状态，分别有以下几种状态：
   * start  游戏前
   * playing 游戏中
   * failed 游戏失败
   * success 游戏成功
   * all-success 游戏通过
   * stop 游戏暂停（1.3.0版本将加入）
   */
  setStatus: function(status) {
    this.status = status;
    if(this.status!=='start'&&
       this.status!=='playing'&&
       this.status!=='failed'&&
       this.status!=='success'&&
       this.status!=='all-success')
      this.status='start';
    container.setAttribute("data-status", this.status);
    if (this.status==='playing') {
      this.playingStatus();
    }
  },
  playingStatus:function(){
    //怪兽模块
    monster=new Array();
    for(var j=0;j<presentLevel;j++){
      for(var i=0;i<numPerLine;i++){
        if(monsterDirection==='right')
          monster[j*numPerLine+i]=new Monster(canvasPadding+i*(monsterSize+monsterGap),canvasPadding+j*(monsterSize+monsterGap),monsterDirection,i);
        else if(monsterDirection==='left')
          monster[j*numPerLine+i]=new Monster(700-canvasPadding+monsterGap-(numPerLine-i)*(monsterSize+monsterGap),canvasPadding+j*(monsterSize+monsterGap),monsterDirection,i);
        monster[j*numPerLine+i].draw();
      }
    }
    monsterAnimate();
    //飞机模块
    if(plane===null){
      plane=new Plane();
    }
    plane.draw();
    //分数统计模块
    if(presentLevel===startLevel)
      score=0;
    scoreCount();
    //游戏失败
    gameOver();
    //游戏成功
    gameSuccess();
    //通关成功
    gameAllSuccess();
    //按键检测
    document.onkeydown=function(e){
      if(plane===null)
        return;
      var key=e.keyCode||e.which||e.charCode;
      switch(key){
        case 32:
          //子弹模块
          var bullet=new Bullet();
          bulletAnimate(bullet);
          break;
        case 37:
          keyboard.push("left");
          plane.direction='left';
          break;
        case 39:
          keyboard.push("right");
          plane.direction='right';
          break;
      }
    }
    document.onkeyup=function(e){
      if(plane===null)
        return;
      var key=e.keyCode||e.which||e.charCode;
      if(key===37){
        let left=0;
        while(1){
          left=keyboard.indexOf('left');
          if(left===-1)
            break;
          keyboard.splice(left,1);
        }
      }
      if(key===39){
        let right=0;
        while(1){
          right=keyboard.indexOf('right');
          if(right===-1)
            break;
          keyboard.splice(right,1);
        }
      }
      if(keyboard.length===0){
        plane.direction='none';
      }  
    }
  }
};
// 初始化
GAME.init();