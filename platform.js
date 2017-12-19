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
		this.x = constrain(this.x, 0, width - 60);
	}

	this.show = function() {
		fill(BACKGROUND_COLOR);
		stroke(BACKGROUND_COLOR);
		rect(this.prevX, this.y, 60, 10);
		fill(color(204, 70, 74));
		rect(this.x, this.y, 60, 10);
	}
}