const grid = document.querySelector('#sketchpad');
const rainbow = [
	"#ffbe3d",
	"#84b900",
	"#37b575",
	"#3b74a7",
	"#4b49b4",
	"#833bad"
];
let color = '#ff6a5c';
let cols = 5;
const min = 5;
const max = 25;
const columnOptions = [];


// populate the column options
for(i = min; i <= max; i+=5) {
	columnOptions.push(i);
}

document.getElementById('input-cols').innerHTML = columnOptions
	.map(option => `<option value="${option}">${option}</option>`)
	.join('');

// build the grid
function buildGrid() {
	const totalSquares = cols * cols;
	const square = document.createElement('div');
	const squareWidth = (grid.offsetWidth / cols) + 'px';
	square.style.width = squareWidth;
	square.style.height = squareWidth;
	for (i = 0; i < totalSquares; i++) {
		grid.appendChild(square.cloneNode(true));
	}
}

buildGrid();

// resize the grid
document.getElementById('input-cols').addEventListener('change', (e) => {
	cols = e.target.value;
	reset();
});

// change the active color
function changeColor() {
	const randomColor = Math.floor(Math.random() * rainbow.length);
	const newColor = rainbow[randomColor];
	if (color == newColor) {
		changeColor();
	}
	color = newColor;
	document.documentElement.style.setProperty('--accent', color);
}

document.getElementById('rainbow').addEventListener('click', changeColor);

// reset the page
function reset() {
	grid.innerHTML = '';
	buildGrid();
}

document.getElementById('reset').addEventListener('click', reset);

// time to draw
function draw(e) {
	e.target.style.backgroundColor = color;
}

grid.addEventListener('touchmove', draw);
grid.addEventListener('mousemove', draw);