const PLATFORM_WIDTH = 60;
var platformSpeed = PLATFORM_SPEED;

function Platform() {
	this.x = 100;
	this.y = 500;
	this.prevX = this.x;
	this.xSpeed = 0;

	this.direction = function(x, y){
		this.xSpeed = x;
	}

	this.update = function() {
		this.prevX = this.x;
		this.x = this.x + this.xSpeed;
		this.x = constrain(this.x, 0, width - PLATFORM_WIDTH);
	}

	this.show = function() {
		fill(BACKGROUND_COLOR);
		stroke(BACKGROUND_COLOR);
		rect(this.prevX, this.y, PLATFORM_WIDTH, 10);
		fill(color(204, 70, 74));
		rect(this.x, this.y, PLATFORM_WIDTH, 10);
	}
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