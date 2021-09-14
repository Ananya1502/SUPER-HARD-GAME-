var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["08e98623-9149-4a25-8e94-69eb3390509f"],"propsByKey":{"08e98623-9149-4a25-8e94-69eb3390509f":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/83IwT63GSAF79D0NhimfA8MegkbD6wh_/category_faces/kidportrait_10.png","frameSize":{"x":316,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"83IwT63GSAF79D0NhimfA8MegkbD6wh_","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/83IwT63GSAF79D0NhimfA8MegkbD6wh_/category_faces/kidportrait_10.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(10,70,100,20);
wall1.shapeColor = 'gray';

var wall2 = createSprite(250,159,100,20);
wall2.shapeColor = 'gray';

var wall3 = createSprite(190,100,100,20);
wall3.shapeColor = 'gray';

var wall4 = createSprite(4,149,200,20);
wall4.shapeColor = 'gray';

var wall5 = createSprite(200,18,100,20);
wall5.shapeColor = 'gray';

var wall6 = createSprite(252,232,20,100);
wall6.shapeColor = 'gray';

var wall7 = createSprite(12,226,20,100);
wall7.shapeColor = 'gray';

var wall8 = createSprite(172,205,62,20);
wall8.shapeColor = 'gray';

var wall9 = createSprite(250,320,220,20);
wall9.shapeColor = 'gray';

var wall10 = createSprite(130,342,20,65);
wall10.shapeColor = 'gray';

var wall11 = createSprite(330,45, 20, 100);
var wall12 = createSprite(335, 215, 20, 50);
var wall13 = createSprite(35,325, 20,65);


var trophy = createSprite(380,370,20,20);
trophy.shapeColor=("orange");

var player =createSprite(20,25,18,18);
player.shapeColor = ("blue");

var laser1 = createSprite(298,32,200,5);
laser1.shapeColor = "red";


var laser2 = createSprite(100,310,200,5);
laser2.shapeColor = "red";

var gameState = "serve";


function draw() {
  background("lightgreen");
  textSize(20);
  fill("green");
  text("PRESS ENTER TO START!", 140, 360);
  
 
  
  createEdgeSprites();
  
player.velocityX = 0;
player.velocityY = 0;
  
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  player.bounceOff(edges);
  
  if (player.isTouching(wall1)
  ||player.isTouching(wall2)
  ||player.isTouching(wall3)
  ||player.isTouching(wall4)
  ||player.isTouching(wall5)
  ||player.isTouching(wall6)
  ||player.isTouching(wall7)
  ||player.isTouching(wall8)
  ||player.isTouching(wall9)
  ||player.isTouching(wall10)
  ||player.isTouching(wall11)
  ||player.isTouching(wall13)
  ||player.isTouching(laser1)
  ||player.isTouching(laser2))
  {
   player.x=20;
   player.y=25;
  }
  
  if (keyDown("UP_ARROW"))
  {
  player.velocityY = -4;
  }
  if (keyDown("DOWN_ARROW")) 
  {
    player.velocityY = 4;
  }
  if (keyDown("RIGHT_ARROW")) 
  {
    player.velocityX = 4;
  }
  if (keyDown("LEFT_ARROW")) 
  {
    player.velocityX = -4;
  }
  
  if (player.isTouching(trophy)) 
  {
    textSize(25);
    fill("green");
    text("YOU WON!!", 175, 360);
    
  }
  
  if (keyDown("enter")) {
    laser2.velocityY = -5;
    laser1.velocityY = 5;
  }
  
  
     
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
