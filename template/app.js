console.log(prompt("what is your name"))
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var nc = document.getElementById('nmyCanvas')
var nctx = nc.getContext("2d")

ctx.moveTo(50, 50);
ctx.lineTo(250, 250);
ctx.strokeStyle = "rgb(15, 50, 255)";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = "midnightblue";
ctx.strokeRect(50,50,200,200);
ctx.strokeStyle = "cyan"

ctx.clearRect(125, 125,50,50)
var s = 300;
for (var i = 0; i <= 300; i+=20){
	//nctx.strokeRect(300-i,300-i,i,i);
	nctx.fillStyle = "black"
	nctx.strokeRect(i,i,s,s);
	s-=20;

}
