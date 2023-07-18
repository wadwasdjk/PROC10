var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a9b8b970-e92a-443d-b97e-6ce46f16f7c8","efd49ec1-f862-48fb-ac4b-5fda108c31f0","863c8254-bcc8-4839-9f5a-24d206493717","999b68e2-4ef7-413f-884e-f70fb85730f3"],"propsByKey":{"a9b8b970-e92a-443d-b97e-6ce46f16f7c8":{"name":"car1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":9,"looping":true,"frameDelay":12,"version":"6h1fr6xhlc0I2e.pAtKUrSP7.DUIbxE.","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":393},"rootRelativePath":"assets/a9b8b970-e92a-443d-b97e-6ce46f16f7c8.png"},"efd49ec1-f862-48fb-ac4b-5fda108c31f0":{"name":"car2","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":9,"looping":true,"frameDelay":12,"version":"svJH6IpITPFEtWhMBqzUXUyM4vDZmpuM","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":393},"rootRelativePath":"assets/efd49ec1-f862-48fb-ac4b-5fda108c31f0.png"},"863c8254-bcc8-4839-9f5a-24d206493717":{"name":"car3","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":6,"looping":true,"frameDelay":12,"version":"RgWekIz1a2V9WSuGmSEE_4JWa19Ot0kF","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":213,"y":262},"rootRelativePath":"assets/863c8254-bcc8-4839-9f5a-24d206493717.png"},"999b68e2-4ef7-413f-884e-f70fb85730f3":{"name":"car_yellow_1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":8,"looping":true,"frameDelay":12,"version":"l5QbFg6O8YRahkEtrGVuYuehYn8D6.Vz","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":262},"rootRelativePath":"assets/999b68e2-4ef7-413f-884e-f70fb85730f3.png"}}};
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

var dead = 0;
var car1, car2, car3,car4;
var border1, border2;
var sam;
  border1 = createSprite(190,120,420,3);
  border2 = createSprite(190,260,420,3);
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("car1");
  car1.scale=0.2;
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("car2");
  car2.scale=0.2;
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("car3");
  car3.scale=0.2;
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("car_yellow_1");
  car4.scale=0.2;
  car1.velocityY = 6;
  car2.velocityY = 6;
  car3.velocityY = -6;
  car4.velocityY = -6;
function draw() {
  background("white");
  text("Deads: " + dead,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  createEdgeSprites();
  
  car1.bounceOff(border1);
  car1.bounceOff(border2);
  car2.bounceOff(border1);
  car2.bounceOff(border2);
  car3.bounceOff(border1);
  car3.bounceOff(border2);
  car4.bounceOff(border1);
  car4.bounceOff(border2);
  if(keyDown("RIGHT_ARROW")){
    sam.x = sam.x + 2;
  }
  if(keyDown("LEFT_ARROW")){
    sam.x = sam.x - 2;
  }
  if(keyDown("DOWN_ARROW")){
    sam.y = sam.y + 2;
  }
  if(keyDown("UP_ARROW")){
    sam.y = sam.y - 2;
  }
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     dead = dead + 1;
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
