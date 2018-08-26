$(document).ready(function () {
// global variables
var cols = 16,
	width = $('#sketchpad').width(),
	minSize = 10,
	maxSize = 100,
	color = "#ff6a5c",
	i = 0,
	rainbow = [
		"#ffbe3d",
		"#eaea3b",
		"#84b900",
		"#37b575",
		"#3b74a7",
		"#4b49b4",
		"#833bad"
	];
	
	console.log(width);
	
	// reset button
	$('input[name="reset"]').click(function () {
		$('.square').css('background-color', '#f8eee7');
		color = "#ff6a5c";
	});

	// change grid size
	$('input[name="change-cols"]').click(function () {
		cols = $('input[name="input-cols"]').val();

		if (isNaN(cols)) {
			alert('You must enter a number.');
			return;
		} else if (cols < minSize || cols > maxSize) {
			alert('You may only enter between ' + minSize + ' and ' + maxSize + ' columns.');
			return;
		}

		reset();
		initGrid(cols, width);
	});

	// rainbow button to change colors
	$('input[name="rainbow"]').on('click', function () {
		var randomNumber = Math.floor(Math.random() * 6);
		color = rainbow[randomNumber];
	});

	// load the first grid at 16 x 16
	initGrid(cols, width);

});


// initialize new grid function
function initGrid(cols, width) {
	var squares = (cols * cols),
			size = ((width - (cols * 2)) / cols);

	for (i = 0; i < squares; i++) {
		$('#sketchpad').append('<div class="square"></div>');
	}

	$('.square').css('width', size);
	$('.square').css('height', size);

	$('.square').mouseover(function () {
		$(this).css('background-color', color);
	});
}

// reset grid function
function reset() {
	$('#sketchpad').empty();
}