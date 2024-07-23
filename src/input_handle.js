function getPos(e){
    var x=e.clientX;
    var y=e.clientY;
    var cursor = "";
    var over_player = false;
    cursor="Your Mouse Position Is : " + x + " and " + y ;
    console.log(cursor)
    return over_player;
}
export default class InputHandler {
    constructor(player, game) {
        document.addEventListener("mousemove", (event) => {
            getPos(event)
        });
        document.addEventListener("keydown", event => {
            if (event.key == "ArrowLeft") {
                player.move_left()
            }
            if (event.key == "ArrowRight") {
                player.move_right()
            }
            if (event.key == "ArrowDown") {
                player.move_up()
            }
            if (event.key == "ArrowUp") {
                player.move_down()
            }
            if (event.repeat) {
                console.log("repeated")
            }
            //console.log(event.key)
        });
    }
}