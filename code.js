var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ff6206b3-599b-4bbb-9074-8ab0f23e91b4","076ae96f-14a4-4ff9-aab7-c0e90b383d64","68561048-279e-4f85-bf80-2e8227415de6","58bf441b-721d-4134-bdfc-a6f71526ae36"],"propsByKey":{"ff6206b3-599b-4bbb-9074-8ab0f23e91b4":{"name":"sports_football_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gzADRGzbQf2w7RKSLQsefPfwox1LVnPS/category_backgrounds/sports_football.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"gzADRGzbQf2w7RKSLQsefPfwox1LVnPS","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gzADRGzbQf2w7RKSLQsefPfwox1LVnPS/category_backgrounds/sports_football.png"},"076ae96f-14a4-4ff9-aab7-c0e90b383d64":{"name":"hocky court animation cropped court.jpg_2","sourceUrl":"assets/v3/animations/spqP1_E_AbI5DcwiX0gkKs41zNKQ1V6EvUjqU6e7dww/076ae96f-14a4-4ff9-aab7-c0e90b383d64.png","frameSize":{"x":261,"y":390},"frameCount":1,"looping":true,"frameDelay":4,"version":"Sb4mcxlpiTYtUA0LSJM55Htma8VaDte8","loadedFromSource":true,"saved":true,"sourceSize":{"x":261,"y":390},"rootRelativePath":"assets/v3/animations/spqP1_E_AbI5DcwiX0gkKs41zNKQ1V6EvUjqU6e7dww/076ae96f-14a4-4ff9-aab7-c0e90b383d64.png"},"68561048-279e-4f85-bf80-2e8227415de6":{"name":"sports_scoccer_1","sourceUrl":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png"},"58bf441b-721d-4134-bdfc-a6f71526ae36":{"name":"puck_1","sourceUrl":null,"frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":12,"version":"qK3k7N_ntGrqNl8mZ25JpdBXQH.m7OIS","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/58bf441b-721d-4134-bdfc-a6f71526ae36.png"}}};
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

var bg=createSprite(200,200,200,200);
    bg.setAnimation("sports_scoccer_1");
    
var goal1=createSprite(200,15,120,25);  
    goal1.shapeColor="white";
    
var goal2=createSprite(200,385,120,25);  
    goal2.shapeColor="white";
    
var playerpaddle1=createSprite(200,50,100,15);
    playerpaddle1.shapeColor="yellow";
    
var playerpaddle2=createSprite(200,350,100,15);
    playerpaddle2.shapeColor="blue";
    
var ball=createSprite(200,200,10,10);
    ball.setAnimation("puck_1");
    ball.scale=0.08;

var score1=0;
var score2=0;

function draw() {

if (keyWentDown("a")) {
  playerpaddle1.velocityX=-5;
}
if (keyWentUp("a")) {
  playerpaddle1.velocityX=0;
}
if (keyWentDown("d")) {
  playerpaddle1.velocityX=5;
}
if (keyWentUp("d")) {
  playerpaddle1.velocityX=0;
}  
if (keyWentDown("LEFT_ARROW")) {
  playerpaddle2.velocityX=-5;
}
if (keyWentUp("LEFT_ARROW")) {
  playerpaddle2.velocityX=0;
}
if (keyWentDown("RIGHT_ARROW")) {
  playerpaddle2.velocityX=5;
}
if (keyWentUp("RIGHT_ARROW")) {
  playerpaddle2.velocityX=0;
}  
if (keyDown("space")) {
  ball.velocityX=3;
  ball.velocityY=5;
}  
createEdgeSprites();
ball.bounceOff(playerpaddle1);
ball.bounceOff(playerpaddle2);
ball.bounceOff(edges);

if (playerpaddle1.isTouching(leftEdge)) {
  playerpaddle1.x=60;
  playerpaddle1.y=50;
}  
if (playerpaddle1.isTouching(rightEdge)) {
  playerpaddle1.x=340;
  playerpaddle1.y=50;
}    
  if (playerpaddle2.isTouching(leftEdge)) {
  playerpaddle2.x=60;
  playerpaddle2.y=350;
}  
if (playerpaddle2.isTouching(rightEdge)) {
  playerpaddle2.x=340;
  playerpaddle2.y=350;
}   
if (ball.isTouching(goal1))  {
  score2=score2+1;
  ball.x=200;
  ball.y=200;
  ball.setVelocity(0,0);
}
if (ball.isTouching(goal2))  {
  score1=score1+1;
  ball.x=200;
  ball.y=200;
  ball.setVelocity(0,0);
}  

drawSprites();
textSize(25);
fill("white");
strokeWeight(7);
text(score1,10,190);
text(score2,10,230);
if (score1===5 || score2===5) {
  textSize(50);
  fill("white");
  strokeWeight(15);
  text("GAME OVER",50,200);
}  
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
