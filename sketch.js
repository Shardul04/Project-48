var gamestate=0;
var startbg,bg;
var Mario, marioimg, runningmarioimg;
var ground,ground2,ground3,ground4,eground,eground2,eground3,eground4;
var pipimg;
var mystorybox;
var brickimg,mariodeadimg,coinanmi;
var enemyanmi;
var caselimg;
var caseldoor,restartimg,wonimg;
var drawpipes=1;
var pipeGroup, brickGroup, CoinGroup, coin1Group, Coin2Group;
var coinscore=0;


function preload(){
startbg = loadImage("Images/welcome.png");
bg =loadImage("Images/background.png");
marioimg = loadAnimation("Images/frame_0.png");
runningmarioimg = loadAnimation("Images/frame_0.png","Images/frame_1.png","Images/frame_2.png");
pipimg = loadImage("Images/Mario_pipe.png");
mystorybox = loadAnimation("Images/box split/f-1.png","Images/box split/f-2.png","Images/box split/f-3.png","Images/box split/f-4.png","Images/box split/f-5.png","Images/box split/f-6.png","Images/box split/f-7.png","Images/box split/f-8.png",
"Images/box split/f-9.png","Images/box split/f-10.png","Images/box split/f-11.png","Images/box split/f-12.png",);
brickimg = loadImage("Images/blocks brick.png");
mariodeadimg = loadImage("Images/mario dead.png");
coinanmi = loadAnimation("Images/coin 1.png","Images/coin 2.png","Images/coin 3.png");
enemyanmi = loadAnimation("Images/enemy split/f1.png","Images/enemy split/f2.png","Images/enemy split/f3.png","Images/enemy split/f4.png","Images/enemy split/f5.png","Images/enemy split/f6.png",);
caselimg = loadImage("Images/casel.png");
wonimg = loadImage("Images/you win.png");
restartimg = loadImage("Images/restart button.png")
}

function setup(){
    createCanvas(1366-20, 663-25);
    Mario = createSprite(0,500,20,20);
    Mario.visible = false;
    ground = createSprite(0 ,height-60,2550,20);
    ground.visible = false;
    ground2 = createSprite(1650,height-60,560,20);
    ground2.visible = false;
    ground3 = createSprite(3265,height-60,2430,20);
    ground3.visible = false;
    ground4 = createSprite(5775,height-60,2370,20);
    ground4.visible = false;
    eground = createSprite(0,height-70,2550,20);
    eground.visible = false;
    eground2 = createSprite(1650,height-70,560,20);
    eground2.visible = false;
    eground3 = createSprite(3265,height-70,2430,20);
    eground3.visible = false;
    eground4 = createSprite(5775,height-70,2370,20);
    eground4.visible = false;
   
    Mario.addAnimation("Mario",marioimg);
    Mario.addAnimation("running mario",runningmarioimg);
    caseldoor = createSprite(6050,height-100,50,50);
    caseldoor.visible = false;
  
    pipeGroup= new Group();
    coin1Group= new Group();
    CoinGroup=new Group();
    Coin2Group=new Group();
    brickGroup= new Group();
    
}
function draw(){
    if(gamestate === 0){
        imageMode(CENTER);
        background("Black");
      image(startbg, width/2, height/2-100, 500, 300);
      fill("White");
      textSize(40);
      textFont("Algebrian");
      text("To Start the Game ", width/2-150, (3/4)*height);
      text("Press (Space Key) ", width/2-150, (3/4)*height+50);

      if(keyDown("space")){
          gamestate = 1;
      }
    }

    if(gamestate == 1){
     background("Red");
     imageMode(CENTER);
     image(bg, width*2, height/2, width*6, height);
     console.log(Mario.y);

     Coin();

     if(drawpipes==1){
     Pipe(200);
     Pipe(640);
     Pipe(1050);
     Pipe(1700);
     Pipe(2500);
     Pipe(3200);
     Pipe(3500);
     Pipe(5000);

     

     Brick(320,400);
     Brick(365,400);
     Brick(410,400);
     Brick(365,280);
     Brick(810,400);
     Brick(855,400);
     Brick(1504,400);
     Brick(1549,400);
     Brick(1594,400);
     Brick(2255,400);
     Brick(2300,400);
     Brick(2345,400);
     Brick(2390,400);
     //upper
     Brick(2345,200);
     Brick(2390,200);
     Brick(2435,200);
     Brick(2480,200);
     Brick(2520,200);
     Brick(2565,200);
     //upper finish
     Brick(2835,400);
     Brick(2880,400);
     Brick(3700,400);
     Brick(3745,400);
     Brick(3790,400);
     Brick(4230,400);
     Brick(4275,400);
     
     Brick(4320,400);
     Brick(4875,400);
     Brick(4920,400);
     Brick(4965,400);
     Brick(5265,400);
     Brick(5310,400);
     Brick(5355,400);
     Brick(5400,400);
     Brick(5350,200);
     Brick(6000,400);
     Brick(6045,400);
     Brick(6090,400);
     
     drawpipes=0;
     }


    
     Mario.scale = 0.2;
     Mario.visible = true;
     image(caselimg,6000,380);
     camera.position.x = Mario.x;
     camera.position.y = height/2;

     

     if(keyDown("UP_ARROW")&&(Mario.isTouching(eground)||Mario.isTouching(eground2)||
     Mario.isTouching(eground3)||Mario.isTouching(eground4))){

         Mario.velocityY = -15;
     }
     Mario.velocityY = Mario.velocityY+0.5;
     Mario.collide(ground);
     Mario.collide(ground2);
     Mario.collide(ground3);
     Mario.collide(ground4);



    
    if(keyWentDown("RIGHT_ARROW")||keyWentDown("D")){
        Mario.velocityX = 10;
        Mario.changeAnimation("running mario",runningmarioimg);
    }
    if(keyWentUp("RIGHT_ARROW")||keyWentUp("D")){
        Mario.velocityX = 0;
        Mario.changeAnimation("Mario",marioimg);

    } 

    if(pipeGroup.isTouching(Mario)){
        Mario.collide(pipeGroup);
        if(keyDown("UP_ARROW")){

         Mario.velocityY = -15;
     }
     Mario.velocityY = Mario.velocityY+0.5;
    }
    if(brickGroup.isTouching(Mario)){
        Mario.collide(brickGroup);
        if(keyDown("UP_ARROW")){

            Mario.velocityY = -15;
        }
    }

    for (var i = 0; i < coin1Group.length; i++) {
        if(coin1Group.get(i).isTouching(Mario)){ 
            coin1Group.get(i).destroy();
            coinscore=coinscore+1;
        }
    }
    for (var i = 0; i < CoinGroup.length; i++) {
        if(CoinGroup.get(i).isTouching(Mario)){ 
            CoinGroup.get(i).destroy();
            coinscore=coinscore+1;
            
        }
        
    }
    for (var i = 0; i < Coin2Group.length; i++) {
        if(Coin2Group.get(i).isTouching(Mario)){ 
            Coin2Group.get(i).destroy();
            coinscore=coinscore+1;
            
        }
        
    }
    
         

    textSize(35);
    fill("Black");
    textFont("Times New Roman")
    text("Coins Collect: " + coinscore, Mario.x+400, 50);


     
    
     if(Mario.isTouching(caseldoor)){
         gamestate = 2;
     }
     if(Mario.y >= 600){
         gamestate = 3;
     }
     
    drawSprites();
}
   if(gamestate === 2){
      background(wonimg);
        textSize(50);
        fill("black");
        text("Press Space key to restart the game",5500,400);
        if(keyDown("space")){
         gamestate = 1;
         Mario.x=0;
         camera.position.x = Mario.x;
        camera.position.y = height/2;
        coinscore=0;
        }
    }

    if(gamestate === 3){
        background("Black");
        fill("White");
        textSize(50);
        textFont("Algebrian");
        text("Game Over",Mario.x-100, height/2);
        
    }
}
function Pipe(x){
var pipe = createSprite(x,525,20,21);
pipe.addImage(pipimg);
pipe.scale = 0.3;
pipeGroup.add(pipe);

}
function Coin(){
    if(frameCount%100 === 0){
    var coin = createSprite(Mario.x,random(height/2,height*3/4));
    var coin1 = createSprite(Mario.x+50,coin.y);
    var coin2 = createSprite(Mario.x+100,coin.y);
    coin.addAnimation("coin",coinanmi);
    coin1.addAnimation("coin",coinanmi);
    coin2.addAnimation("coin",coinanmi);   
    coin.scale = 0.2;
    coin1.scale = 0.2;
    coin2.scale = 0.2;
    coin.x += 600;
    coin1.x += 600;
    coin2.x += 600;
    coin.lifetime=500;
    coin1.lifetime=500;
    coin2.lifetime=500;
    coin1Group.add(coin1);
    CoinGroup.add(coin);
    Coin2Group.add(coin2);

}
}
function Brick(x,y){
    var brick = createSprite(x,y);
    brick.addImage(brickimg);
    brick.scale = -0.15;
    brickGroup.add(brick);
    brick.setCollider("rectangle",0,0,300,300);
}
