var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create: create, update: update});

var lives = 3;
var score = 0;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('diamond', 'assets/sky.png');
	game.load.image('firstaid', 'assets/sky.png');
	game.load.image('platform', 'assets/sky.png');
	game.load.image('star', 'assets/sky.png');

	game.load.spritesheet('dude', 'assets/dude.png', 32, 48)
	game.load.spritesheet('baddie', 'assets/dude.png', 32, 32)
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//create sky
	game.add.sprite(0,0, 'sky');

	//create platform
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, 'platform')
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	ledge1 = platforms.create(400,400, 'platform');
	ledge1.body.immovable = true;

	ledge2 = platforms.create(-100,250, 'platform');
	ledge2.body.immovable = true;

	var style = {font: "bold 32px Arial", fill: "#fff"};

	scorelabel = game.add.text(300, 560, "Score: ", style);
	scoretext = game.add.text(420, 560, score, style);
	scorelabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	scoretext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);

	liveslabel = game.add.text(10,5, "Lives: ", style);
	livestext = game.add.text(120, 5, lives, style);
	liveslabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	livestext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
}

function update(){

}
