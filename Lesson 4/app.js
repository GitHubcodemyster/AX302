console.log("Hello")
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var img = new Image();
img.src = "tree.png"

var img2 = new Image();
img.src = "tree.png"

var img3 = new Image();
img.src = "tree.png"

img.onload = function(){
	ctx.drawImage(img, 150, 150, 100,100);
}
img2.onload = function(){
	ctx.drawImage(img, 100, 100, 100,100);
}
img3.onload = function(){
	ctx.drawImage(img, 200, 200, 100,100);
}
ctx.font = "70px Impact"
ctx.fillText("hi",150, 40);
ctx.strokeText("hi", 150, 40)
