var platform;
var ball;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGTH = 600;
const PLATFORM_SPEED = 7;
const BACKGROUND_COLOR = 0;
const BLOCKS_WIDTH = CANVAS_WIDTH/10;
const BLOCKS_HEIGHT = 20;
const NUM_BLOCKS = CANVAS_WIDTH/BLOCKS_WIDTH * 6;

var blocksCoordinates = [];

function drawBlocks(){
	var colors = [];

	colors.push(color(204, 70, 74));
	colors.push(color(201, 106, 67));
	colors.push(color(182, 120, 61));
	colors.push(color(162, 161, 66));
	colors.push(color(63, 159, 84));
	colors.push(color(66, 76, 193));

	for(var j = 1; j <= 6; j++){
		for(var i = 0; i < width; i += BLOCKS_WIDTH){
			stroke(colors[j - 1]);
			fill(colors[j - 1]);
			rect(i, (j + 1) * BLOCKS_HEIGHT, BLOCKS_WIDTH, BLOCKS_HEIGHT);
			blocksCoordinates.push([i, (j + 1) * BLOCKS_HEIGHT]);
		}
	}

	for (var i = 0; i < blocksCoordinates.length; i++) {
		console.log("x: " + blocksCoordinates[i][0] + " y: " + blocksCoordinates[i][1]);
	}
}


function setup() {
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGTH);
	background(BACKGROUND_COLOR);
	drawBlocks();
	platform = new Platform();
	ball = new Ball();
}

function draw() {
	//background(51);
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