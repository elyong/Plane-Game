var CONFIG = {
    status: 'start', // 游戏开始默认为开始中
    level:1, // 游戏默认等级,范围1-6
    totalLevel: 6, // 最大等级，最多到第六等级,若小于默认等级则该值设为与默认等级相同的值
    numPerLine: 7, // 游戏默认每行多少个怪兽，范围1-7
    canvasPadding: 30, // 默认画布的间隔,范围20-40
    bulletSize: 10, // 默认子弹长度,范围5-20
    bulletSpeed: 10, // 默认子弹的移动速度,范围2-20
    enemySpeed: 2, // 默认敌人移动距离,范围1-5
    enemySize: 50, // 默认敌人的尺寸,范围30-60
    enemyGap: 10,  // 默认敌人之间的间距,范围5-30
    enemyIcon: './img/enemy.png', // 怪兽的图像
    enemyBoomIcon: './img/boom.png', // 怪兽死亡的图像
    enemyDirection: 'right', // 默认敌人一开始往右移动
    planeSpeed: 5, // 默认飞机每一步移动的距离,范围2-5
    planeSize: {
      width: 60, //范围30-90
      height: 100 //范围50-100
    }, // 默认飞机的尺寸,
    planeIcon: './img/plane.png', //飞机的图像
};