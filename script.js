window.onload = function(){

		var canvas = document.getElementById('qwe');
		canvas.width = 1000;
		canvas.height = 700;
		var c = canvas.getContext('2d');

		
		
		var gk1 = new Gk();
		var gk2 = new Gk2();
		var ball = new Circle();


		var	up, down, up2, down2 = false;	
		window.addEventListener('keydown', move ,false);
		window.addEventListener('keyup', stop, false);	
		function move(event)	{	
			var keyCode = event.keyCode; 
			switch	(keyCode)	{	
				case 67:
				var kolko = new Circle();
				ball = kolko;
				break;
				case 38:	//góra87
				up2		= true;	
				down2	= false;		
				break;	
				case 40:	//dół83	
				down2 = true;	
				up2 = false;
				break;	
				case 87:	//góra87w
				up		= true;	
				down	= false;		
				break;	
				case 83:	//dół83s
				down = true;	
				up = false;
				break;	
			}	
			event.preventDefault();	
		}	

		function stop(event)	{
			var keyCode2 = event.keyCode;
				switch	(keyCode2)	{	
				case 38:	//góra
				up2		= false;			
				break;	
				case 40:	//dół	
				down2	= false;	
				break;
				case 87:	//góra87w
				up		= false;			
				break;	
				case 83:	//dół83s
				down = false;	
				break;		
				
			}	
				event.preventDefault();	
		}

		function update(delta) {
			if (gk1.x + gk1.r >= ball.x - ball.r && gk1.x  <= ball.x - ball.r  &&  gk1.y  <= ball.y + ball.r && (gk1.y + gk1.r) >= ball.y + ball.r){
				ball.velocity*=-1;
				ball.a*=-1;
			}
			if (gk2.x + gk2.r >= ball.x  &&  gk2.y  <= ball.y && (gk2.y + gk2.r) >= ball.y){
				ball.velocity*=-1;
				ball.a*=-1;
			}
			if(up && gk1.y >= 5){
			gk1.y -= 5;	
			}
			if(down && gk1.y <= canvas.height - 55){
			gk1.y += 5;	
			}
			if(up2 && gk2.y >= 5){
			gk2.y -= 5;	
			}
			if(down2 && gk2.y <= canvas.height - 55){
			gk2.y += 5;	
			}
			ball.update(delta);

		}

		function draw() {
				c.clearRect(0, 0, canvas.width, canvas.height);
				c.fillStyle = 'black';
				c.fillRect(10, canvas.height/2 - 150, 30, 300);
				c.fillRect(canvas.width - 40, canvas.height/2 - 150, 30, 300);
				gk1.draw(c);
				gk2.draw(c);
				if(ball){
					ball.draw(c);
				}
				
		}

		MainLoop.setUpdate(update).setDraw(draw).start();
		
}