const BALL_DIAMETER = 10;
const BALL_RADIUS = BALL_DIAMETER/2;
var ballSpeed = 4;
var blocksDestroied = 0;

function colided(x, y){
	var remove = [];
	var colision = false;

	for (var i = 0; i < blocksCoordinates.length; i++) {
		if(x + BALL_DIAMETER >= blocksCoordinates[i][0] && x <= blocksCoordinates[i][0] + BLOCKS_WIDTH && y + BALL_DIAMETER >= blocksCoordinates[i][1] && y <= blocksCoordinates[i][1] + BLOCKS_HEIGHT){
			blocksDestroied++;
			fill(0);
			rect(blocksCoordinates[i][0], blocksCoordinates[i][1], BLOCKS_WIDTH, BLOCKS_HEIGHT);
			remove.push(i);
			blocksCoordinates.splice(i, 1);
			i -= 1;
			colision = true;	
		}
	}

	return colision;
}

function Ball(){
	this.x = 130;
	this.y = 500 - BALL_DIAMETER;
	this.prevX = this.x;
	this.prevY = this.y;
	this.xSpeed = ballSpeed;
	this.ySpeed = -ballSpeed;

	this.direction = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.update = function(platformX, platformY) {
		ballSpeed = BALL_SPEED;
		this.prevX = this.x;
		this.prevY = this.y;

		if(this.x <= 0){
			this.xSpeed = ballSpeed;
		}
		else if(this.x + BALL_DIAMETER >= width){
			this.xSpeed = -ballSpeed;
		}
		else if(this.y <= 0){
			this.ySpeed = ballSpeed;
		}
		else if((this.y >= platformY - BALL_DIAMETER && this.y <= platformY + 10 - BALL_DIAMETER) && (this.x > platformX - BALL_DIAMETER && this.x < platformX + PLATFORM_WIDTH)){
			var factor = (this.x - platformX - PLATFORM_WIDTH/2)/(PLATFORM_WIDTH/2); 
			this.ySpeed = -Math.sqrt(2 * Math.pow(ballSpeed, 2)) * Math.cos(factor * Math.PI/3.5);
			this.xSpeed =  Math.sqrt(2 * Math.pow(ballSpeed, 2)) * Math.sin(factor * Math.PI/3.5);
		}
		else if (colided(this.x, this.y)){
			this.ySpeed = - this.ySpeed;
		}
		else if(this.y >= height - BALL_DIAMETER){
			this.x = platformX + 30;
			this.y = 500 - BALL_DIAMETER;
			this.xSpeed = ballSpeed;
			this.ySpeed = -ballSpeed;
		}

		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	this.show = function() {
		fill(BACKGROUND_COLOR);
		stroke(BACKGROUND_COLOR);
		rect(this.prevX, this.prevY, BALL_DIAMETER, BALL_DIAMETER);
		fill(color(204, 70, 74));
		rect(this.x, this.y, BALL_DIAMETER, BALL_DIAMETER);
	}
}