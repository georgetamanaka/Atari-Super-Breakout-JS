const BALL_DIAMETER = 10;
const BALL_RADIUS = BALL_DIAMETER/2;
const BALL_SPEED = 3;

function colided(x, y){
	//console.log(x +" " + y);
	for (var i = 0; i < blocksCoordinates.length; i++) {
		//console.log(blocksCoordinates[i][0] + " " + blocksCoordinates[i][1])

		if(x >= blocksCoordinates[i][0] - BALL_RADIUS && x <= blocksCoordinates[i][0] + BLOCKS_WIDTH + BALL_RADIUS && y >= blocksCoordinates[i][1] && y <= blocksCoordinates[i][1] + BLOCKS_HEIGHT + BALL_RADIUS){
			fill(0);
			rect(blocksCoordinates[i][0], blocksCoordinates[i][1], BLOCKS_WIDTH, BLOCKS_HEIGHT);
			blocksCoordinates.splice(i, 1);
			return true;
		}
	}
}

function Ball(){
	this.x = 130;
	this.y = 500 - BALL_RADIUS;
	this.prevX = this.x;
	this.prevY = this.y;
	this.xSpeed = BALL_SPEED;
	this.ySpeed = -BALL_SPEED;

	this.direction = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.update = function(platformX, platformY) {
		//console.log(this.x);
		this.prevX = this.x;
		this.prevY = this.y;

		if(this.x <= floor(BALL_RADIUS)){
			this.xSpeed = BALL_SPEED;
		}
		else if(this.x >= floor(width - BALL_RADIUS)){
			this.xSpeed = -BALL_SPEED;
		}
		else if(this.y <= floor(BALL_RADIUS)){
			this.ySpeed = BALL_SPEED;
		}
		else if((this.y >= platformY - BALL_RADIUS && this.y <= platformY + 10 - BALL_RADIUS) && (this.x >= platformX && this.x <= platformX + 60)){
			this.ySpeed = -BALL_SPEED;
		}
		else if (colided(this.x, this.y)){
			this.ySpeed = - this.ySpeed;

		}
		else if(this.y >= height - BALL_RADIUS){
			this.x = platformX + 30;
			this.y = 500 - BALL_RADIUS;
			this.xSpeed = BALL_SPEED;
			this.ySpeed = -BALL_SPEED;
		}

		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	this.show = function() {
		fill(BACKGROUND_COLOR);
		stroke(BACKGROUND_COLOR);
		rect(this.prevX, this.prevY, BALL_DIAMETER + 1, BALL_DIAMETER + 1);
		fill(color(204, 70, 74));
		rect(this.x, this.y, BALL_DIAMETER, BALL_DIAMETER);
	}
}