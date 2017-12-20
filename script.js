var platform;
var ball;
const CANVAS_WIDTH = 350;
const CANVAS_HEIGTH = 600;
const PLATFORM_SPEED = 3;
const BALL_SPEED = 3;
const BACKGROUND_COLOR = 0;
const NUM_BLOCKS = 10;
const BLOCKS_WIDTH = CANVAS_WIDTH/NUM_BLOCKS;
const BLOCKS_HEIGHT = 20;

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

	platform.update();
	platform.show();

	ball.update(platform.x, platform.y);
	ball.show();

	if(!blocksCoordinates.length){
		setup();
	}
}