const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

var player = new Image();
player.src = "https://www.svgrepo.com/show/49407/scientist.svg";
player.onload = function() {
    ctx.drawImage(player,0,2);
}

var desk = new Image();
desk.src = "https://www.svgrepo.com/show/230630/desk.svg";
desk.onload = function() {
    ctx.drawImage(desk,-100,350,1000,1000);
}

function game_loop() {
    // clear canvas
    // update player 
}