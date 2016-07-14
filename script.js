var cols = 16,
    numberSquares = (cols * cols),
    i = 0;

$(document).ready(function () {
    "use strict";
    for (i = 0; i < numberSquares; i++) {
        $('#sketchpad').append('<div class="square"></div>');
    }
    
    var size = ((960 - (cols * 2)) / cols);
    $('.square').css('width', size);
    $('.square').css('height', size);
    
    $('.square').mouseover(function () {
        $(this).css('background-color', '#ff6a5c');
    });
});