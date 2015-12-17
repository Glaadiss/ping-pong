		var width = 1300;
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
			this.r = 10;
			this.velocity = 1;
			this.limit = 1300;
			this.c = Math.floor((Math.random() + Math.random())); 
			if(this.c==0)
			this.c=-1;
			this.a = Math.random()*0.3 -0.1;
			this.b =  0.7 * this.c;
			this.play = true;
			this.nowy = false;
			this.pkt = 0;
			
			this.update = function(delta) {
				this.y += this.velocity * delta * this.a;
				this.x += this.velocity * delta * this.b;
				if (this.y >= this.limit-600 || this.y <= 0){
				this.velocity = -this.velocity;
				this.b*=-1;
				}
				if (this.x >= this.limit || this.x <= 0){
				if(this.y>= (height/2 - 150) && this.y <= (height/2 + 150))
				{
					this.nowy = true;
					if(this.x > 100)
					this.pkt = 1;
					else
					this.pkt =2;
				}
				this.velocity = -this.velocity;
				this.a*=-1;
				}
				
			}

			//funkcją rysująca obiekt
			this.draw = function(ctx) {	
			ctx.beginPath();
			ctx.fillStyle = 'white';
			ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
			}
	}