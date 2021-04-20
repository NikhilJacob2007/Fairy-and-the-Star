var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;
var song;
var block;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	song = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	song.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(130, 520, 10, 10);
	fairy.addAnimation("fairy", fairyImg);
	fairy.scale = 0.25;

	block = createSprite(650, 510, 10, 10);
	block.visible = false;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  keyPressed();

  //write code to stop star in the hand of fairy
  if (fairy.isTouching(block))
  {

	fairy.velocityX = 0;
	Matter.Body.setStatic(starBody, false);

  }
  if (star.isTouching(block)) 
  {

	Matter.Body.setStatic(starBody, true);

  }

  fairy.setCollider("circle", 470, 2, 50);
  fairy.debug = false;

  drawSprites();

}

function keyPressed() {
	//write code to move fairy left and right
	if (keyDown("right_arrow"))
	{

		fairy.velocityX = +20;

	}
	
}
