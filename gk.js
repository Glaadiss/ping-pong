var width = 1300;
var height =  700;
function Gk() {
	this.x = 50;
	this.y = height/2 - 50;
	this.r = 5
	this. ry = 100 
	this.velocity = 0.7;
	this.limit = 1100;
	this.play = true;
	this.color = 'green';
//logika sterująca obiektem
this.update = function() {
	this.y += this.velocity

}

//funkcją rysująca obiekt
this.draw = function(ctx) {

	ctx.fillStyle = this.color;	
	ctx.fillRect(this.x, this.y, this.r, this.ry);

	}
}

function Gk2() {
	this.x = width - 60;
	this.y = height/2 - 50;
	this.r = 5
	this. ry = 100 
	this.velocity = 0.7;
	this.limit = 1100;
	this.play = true;
	this.color = 'green';
//logika sterująca obiektem
this.update = function() {
	this.y += this.velocity

}

//funkcją rysująca obiekt
this.draw = function(ctx) {

	ctx.save();
	ctx.fillStyle = this.color;	
	ctx.fillRect(this.x, this.y, this.r, this.ry);
	ctx.restore();

	}
}