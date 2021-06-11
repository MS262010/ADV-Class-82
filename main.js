var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color ="blue"

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =5;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_x_position, current_y_position);
        ctx.stroke();
    }
    last_position_of_x = current_x_position;
    last_position_of_y = current_y_position;

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}