window.onload = function(){

		var canvas = document.getElementById('qwe');
		canvas.width = 1300;
		canvas.height = 700;
		var c = canvas.getContext('2d');
		var score = document.getElementById('score');
		var rotate =0;
		var unrotate = 360;
		var randomTime = Math.floor((Math.random() * 5000) + 1000);
		var gk1Fast = 0;
		var gk2Fast = 0;
		var gk1 = new Gk();
		var gk2 = new Gk2();
		var ball = new Circle();
		var e = new Event();
		var pkt1 = 0;
		var pkt2 = 0;
		var y1 = 0;
		var y2 = 0;

		function addEvent(){
		e.play = true;
		randomTime = Math.floor((Math.random() * 10000) + 2000);	
		}

		setInterval(addEvent, randomTime);

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
				case 38:	//góra
				up2		= true;	
				down2	= false;	
			
				break;	
				case 40:	//dół
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
				gk2Fast = 0;
				break;	
				case 40:	//dół	
				down2	= false;
				gk2Fast = 0;
				break;
				case 87:	//góra87w
				up		= false;	
				gk1Fast = 0;
				break;	
				case 83:	//dół83s
				down = false;	
				gk1Fast = 0;
				break;		
				
			}	
				event.preventDefault();	
		}



	


		function update(delta) {

			if(ball.x > canvas.width ){
				ball.x = canvas.width - 5;
				ball.b = Math.abs(ball.b) * -1;
			}
			if(ball.x < 0){
				ball.x = 5;
				ball.b = Math.abs(ball.b);
			}



			if (ball.x <= gk1.x+5 && (ball.y-ball.r)>= gk1.y && (ball.y+ball.r) <= (gk1.y + gk1.ry)){
				gk2.lastImpress = false;
				gk1.lastImpress = true;
				ball.b*=-1;
				if(ball.b<2 && ball.b> -2)
				ball.b*=1.1;
				
				ball.a=1;
				ball.a*= gk1Fast;
				gk1Fast = 0;
			}
			if (  ball.x>= gk2.x   && ball.y>= gk2.y && ball.y <= (gk2.y + gk2.ry)){
				gk1.lastImpress = false;
				gk2.lastImpress = true;
				ball.b*=-1;
				if(ball.b<2 && ball.b> -2)
				ball.b*=1.1;
				
				ball.a=1;
				ball.a*=gk2Fast;
				gk2Fast=0;
			}

			if(Math.abs(ball.x - e.x) <= e.r && Math.abs(ball.y - e.y) <= e.r){
				if(e.type == 0 ){
				if(gk1.lastImpress)
				pkt1+=20;
				pkt2+=20;
				}

				if(e.type ==1){
				if(gk1.lastImpress){
				gk2.ry-=50;
				setTimeout(function(){ gk2.ry = gk1.ry;}, 5000 );
				}
				else{
				gk1.ry-=50;
				setTimeout(function(){ gk1.ry = gk2.ry;}, 5000 );
				}
				}

				if(e.type ==2){
				if(gk1.lastImpress){
				gk1.ry+=100;
				setTimeout(function(){ gk1.ry = gk2.ry;}, 5000 );
				}
				else{
				gk2.ry+=100;
				setTimeout(function(){ gk2.ry = gk1.ry;}, 5000 );
				}
				}




				e = new Event();
			}


			if(ball.nowy)
			{
				if(ball.pkt == 1)
				pkt1 ++;
				else if(ball.pkt ==2)
				pkt2 ++;

			ball = new Circle();
			gk1 = new Gk();
			gk2 = new Gk2();

			}
/*

			if ((Math.abs(40 - (ball.x - ball.r)) < 5) && (ball.y + ball.r) >(canvas.height/2 - 150) && (ball.y -ball.r) <(canvas.height/2 +300)  ){
				ball = new Circle();
				pkt2+=1;
			}

			if ((Math.abs((canvas.width - 40)  - ball.x) < 5) && (ball.y + ball.r) >(canvas.height/2 - 150) && (ball.y -ball.r) <(canvas.height/2 +300) ){
				ball = new Circle();
				pkt1+=1;
			}
*/

			if(up && gk1.y >= 5){
			gk1.y -= 5;	
			gk1Fast -=0.01;
			}
			else if(down && gk1.y <= canvas.height - 55){
			gk1.y += 5;	
			gk1Fast +=0.01;
			}
			else{
			gk1Fast = 0;
			}
			if(up2 && gk2.y >= 5){
			gk2.y -= 5;	
			gk2Fast -=0.01;
			}
			else if(down2 && gk2.y <= canvas.height - 55){
			gk2.y += 5;
			gk2Fast +=0.01;	
			}
			else{
			gk2Fast =0;
			}
			ball.update(delta);

		}

		function draw() {

				score.innerHTML = pkt1 + ' : ' + pkt2;
				c.fillStyle = 'lime';
				c.fillRect(0, 0, canvas.width, canvas.height);
				c.fillStyle = 'red';
				c.fillRect(0, canvas.height/2 - 150, 10, 300);
				c.fillRect(canvas.width -10, canvas.height/2 - 150, 10, 300);
				c.beginPath();	
				c.moveTo(canvas.width/2,0);	
				c.lineTo(canvas.width/2,canvas.height);	
				c.strokeStyle	= "#000000";	
				c.stroke();	
				c.beginPath();
				c.arc(canvas.width/2, canvas.height/2, 60, 0, Math.PI*2, true);
				c.closePath();
				c.stroke();	
				if(e.play){
				e.draw(c);
				}
				gk1.draw(c);
				gk2.draw(c);
				if(ball){
					ball.draw(c);
				}
		

		
			
				
		}

		MainLoop.setUpdate(update).setDraw(draw).start();
		
}