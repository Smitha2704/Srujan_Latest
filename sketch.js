var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var player,game,form;
var bombblast,llamablast,cannonshoot;

var yellowPlane,redPlane


var yellowCannon;
var redCannon;
var cannons=[];

var allPlayers;
var redPlaneGroup, yellowPlaneGroup, llamaGroup, bombGroup;

var score=0;

var llama,bomb;


var yellowCannonimg,redCannonimg,llamaimg,bombimg, bg; 

function preload(){
  yellowCannonimg=loadImage("redCannon.png") 
  redCannonimg=loadImage("blue cannon2.png") 
  llamaimg=loadAnimation("Dove/bird11.png","Dove/bird12.png", "Dove/bird12.png", "Dove/bird14.png")  
  bombimg=loadImage("redbomb.png") 
  bombblast=loadSound("bombBlast.mp3") 
  llamablast=loadSound("llamaShoot.mp3") 
  cannonshoot=loadSound("cannonShoot.mp3") 
  bg = loadImage("background.jpg")
  bg.scale=0.1
  bg1 = loadImage("background2.jpg")
  bg1.scale=0.1
  flameImg = loadImage("redflame.png");
  bluePlaneImg=loadImage("Dove/blueplane.png")
  redPlaneImg = loadImage("Dove/redplane.png")

}


function setup(){
  canvas = createCanvas(1500,900);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  bulletGroup=createGroup();
  redPlaneGroup = createGroup();
  yellowPlaneGroup = createGroup();
  llamaGroup = createGroup();
  bombGroup=createGroup();

}


function draw(){
//background(34,177,76);
background(bg);

 if(playerCount==2){
   game.update(1);
 } 

 if(gameState==1){
   clear();
   game.play();
 }
}
