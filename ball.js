const BALL_DIAMETER = 15;
const BALL_RADIUS = BALL_DIAMETER/2;
const BALL_SPEED = 7;

function Ball(){
	this.x = 130;
	this.y = 500 - BALL_RADIUS;
	this.prevX = x;
	this.prevY = y;
	this.xSpeed = BALL_SPEED;
	this.ySpeed = -BALL_SPEED;

	this.direction = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.update = function(platformX, platformY) {
		//console.log(this.x);

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
		fill(255);
		ellipse(this.x, this.y, BALL_DIAMETER, BALL_DIAMETER);
	}
}