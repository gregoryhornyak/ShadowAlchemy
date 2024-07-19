const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

var wall = new Image();
wall.src = "https://www.svgrepo.com/show/178610/brick-wall-wall.svg";
wall.onload = function() {
    ctx.drawImage(wall,0,0,300,300);
}

var player = new Image();
player.src = "https://www.svgrepo.com/show/49407/scientist.svg";
player.onload = function() {
    ctx.drawImage(player,0,0,300,300);
}

var desk = new Image();
desk.src = "https://www.svgrepo.com/show/230630/desk.svg";
desk.onload = function() {
    ctx.drawImage(desk,0,350,300,300);
}

function game_loop() {
    // clear canvas
    // update player
    // update assets
}