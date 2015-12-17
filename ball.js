		var width = 1000;
		var height =  700;
		function getRandomColor() {
		    var letters = '0123456789ABCDEF'.split('');
		    var color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 16)];
		    }
		    return color;
		}
	
		function random()
		{
			x = Math.floor((Math.random() * 500) + 30);;
			return x;
		}


		

		function Circle() {
			this.x = width/2;
			this.y = height/2;
			this.r = 20;
			this.velocity = 0.5;
			this.limit = 1000;
			this.a = Math.random() -0.5;
			this.b = Math.random() -0.5;
			this.play = true;
			
			this.update = function(delta) {
				this.y += this.velocity * delta * this.a;
				this.x += this.velocity * delta * this.b;
				if (this.y >= this.limit-300 || this.y <= 0){
				this.velocity = -this.velocity;
				this.b*=-1;
				}
				if (this.x >= this.limit || this.x <= 0){
				this.velocity = -this.velocity;
				this.a*=-1;
				}
				
			}

			//funkcją rysująca obiekt
			this.draw = function(ctx) {	
			ctx.beginPath();
			ctx.fillStyle = getRandomColor();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
			}
	}