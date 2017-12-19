function Platform() {
	this.x = 100;
	this.y = 500;
	this.xSpeed = 0;

	this.direction = function(x, y){
		this.xSpeed = x;
	}

	this.update = function() {
		this.x = this.x + this.xSpeed;
		this.x = constrain(this.x, 0, width - 60);
	}

	this.show = function() {
		fill(255);
		rect(this.x, this.y, 60, 10);
	}
}