var platform;
var ball;
const PLATFORM_SPEED = 7;

function setup() {
	createCanvas(400, 600);
	background(51);
	platform = new Platform();
	ball = new Ball();
}

function draw() {
	background(51);
	platform.update();
	platform.show();
	ball.update(platform.x, platform.y);
	ball.show();
}

function keyReleased() {
	platform.direction(0, 0);
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		platform.direction(0, -PLATFORM_SPEED);
	}
	else if(keyCode == DOWN_ARROW){
		platform.direction(0, PLATFORM_SPEED);
	}
	else if(keyCode == RIGHT_ARROW){
		platform.direction(PLATFORM_SPEED, 0);
	}
	else if(keyCode == LEFT_ARROW){
		platform.direction(-PLATFORM_SPEED, 0);
	}
	else{
		platform.direction(0, 0);
	}
}