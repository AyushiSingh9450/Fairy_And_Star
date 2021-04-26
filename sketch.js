var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

var fairy, fair_image;
var joy_music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");

	//load animation for fairy here
	fairy_image = loadAnimation("image/fairyImage1.png","image/fairyImage2.png");
	joy_music = loadSound("sound/joy_music.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(100, 200);
	fairy.addAnimation("flying", fairy_image);
	fairy.velocityX = 2;

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

  console.log(star.y);

  //adding function here
  keyPressed();

  Engine.update(engine);
  drawSprites();

}

function keyPressed() {

	//conditionals for the movement of fairy
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 10;
	}
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 10;
	}

	//condotions for the movement of the star
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		
	}

	if(starBody.isTouching(fairy) && starBody.isTouching(fairy)){
		Matter.body.setStatic(starBody, true);
		fairy.velocityX = 0;
	}
	
}
