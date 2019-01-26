console.log("Hello")
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var img = new Image();
img.src = "tree.png"

img.onload = function(){
	ctx.drawImage(img, 100, 100, 100,100);
}
ctx.fillStyle = "red"
ctx.strokeStyle = "black"
ctx.font = "30px Aerial"
ctx.fillText("hi",100, 100);
ctx.strokeText("hi", 100, 100)
