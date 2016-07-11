//initialisation
var canvas = document.getElementById("grille");
var ctx = canvas.getContext("2d");


function drawPaddle(x,y,text){
   ctx.beginPath();
   ctx.rect(x,y,100,100);
   ctx.lineWidth="1";
   ctx.strokeStyle="black";
   ctx.stroke();
   ctx.closePath();
   if (text!=0)
	{ctx.font = "30px Arial";
	ctx.fillText(text,x+40,y+60);}
}
var game =[];
for (var i=0;i<16;i++){
		game.push(0)
	}
function draw_grille(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			drawPaddle(j*100,i*100,game[4*i+j]);
		}
}
}
function restart(){

ctx.clearRect(0,0,canvas.width,canvas.height);

var ini1=Math.floor((Math.random() * 16) ); 
var ini2=Math.floor((Math.random() * 16) ); 
if (ini2===ini1){
	ini1++;
	ini1=ini1%16;
	}
for (var i=0;i<16;i++){
		game[i]=0
	}

game[ini1]=2*Math.floor((Math.random()*2)+1);
game[ini2]=2*Math.floor((Math.random()*2)+1);
draw_grille();

}
restart();

//change game grid (the array)
function modify_grid(grid,direction){
	var change=false;
	var row=[[],[],[],[]];
	var grid_r=[];
	if (!(direction===37||direction==38||direction==39||direction===40)){
		return [grid,change];}
	else if (direction==37||direction==39){
		for (var i=0;i<4;i++){
			for (var j=0;j<4;j++){

			row[i].push(game[4*i+j]);

		}

		}
		for (var i=0;i<4;i++){


		
		if (direction==37){

			for (var i=0;i<4;i++){

				var row1=row[i];
				var row_inter=[];
				var first=false;
				var begin=-1;

				for (var j=0;j<4;j++){
						if (row1[j]!=0){
							
							if (!first) {

							begin=row1[j];
							first=true;}
							else if (begin==row1[j]){
								row_inter.push(2*begin);
								first=false;

								}
							else{
								row_inter.push(begin);

								begin=row1[j];
								
						}
						
						
				
						}
				}
			if (first)
				row_inter.push(begin);
				

			for (var j=0;j<4;j++){
					if (j<row_inter.length)
						{row[i][j]=row_inter[j];}
					else
						row[i][j]=0;
					
				}

			}
			for (var i=0;i<4;i++){
				for (var j=0;j<4;j++){
					grid_r.push(row[i][j]);
					if (row[i][j]!=grid[4*i+j])
						{change=true;}
				}
			}

			}
		else if (direction==39){

			for (var i=0;i<4;i++){

				var row1=row[i];
				var row_inter=[];
				var first=false;
				var begin=-1;

				for (var j=0;j<4;j++){
						if (row1[3-j]!=0){
							
							if (!first) {
							begin=row1[3-j];
							first=true;}
							else if (begin==row1[3-j]){
								row_inter.push(2*begin);
								first=false;
								}
							else{
								row_inter.push(begin);
								
								begin=row1[3-j];
								
						}
						
						
				
						}
				}
			if (first)
				row_inter.push(begin);


			for (var j=0;j<4;j++){
					if (j<row_inter.length)
						{row[i][3-j]=row_inter[j];}
					else
						row[i][3-j]=0;
					
				}

			}
			for (var i=0;i<4;i++){
				for (var j=0;j<4;j++){
					grid_r.push(row[i][j])
					if (row[i][j]!=grid[4*i+j])
						{change=true;}
				}
			}

			}
		
		
	}
	}
		else if (direction==38||direction==40){
		for (var i=0;i<4;i++){
			for (var j=0;j<4;j++){

			row[j].push(game[4*i+j]);

		}

		}


		
		if (direction==38){

			for (var i=0;i<4;i++){

				var row1=row[i];
				var row_inter=[];
				var first=false;
				var begin=-1;

				for (var j=0;j<4;j++){
						if (row1[j]!=0){
							
							if (!first) {
							begin=row1[j];
							first=true;}
							else if (begin==row1[j]){
								row_inter.push(2*begin);
								first=false;
								}
							else{
								row_inter.push(begin);
								
								begin=row1[j];
								
						}
						
						
				
						}
				}
			if (first)
				row_inter.push(begin);
				

			for (var j=0;j<4;j++){
					if (j<row_inter.length)
						{row[i][j]=row_inter[j];}
					else
						row[i][j]=0;
					
				}

			}
			for (var i=0;i<4;i++){
				for (var j=0;j<4;j++){
					grid_r.push(row[j][i])
					if (row[i][j]!=grid[4*i+j])
						{change=true;}
				}
			}

			}
		else if (direction==40){

			for (var i=0;i<4;i++){

				var row1=row[i];
				var row_inter=[];
				var first=false;
				var begin=-1;

				for (var j=0;j<4;j++){
						if (row1[3-j]!=0){
							
							if (!first) {
							begin=row1[3-j];
							first=true;}
							else if (begin==row1[3-j]){
								row_inter.push(2*begin);
								first=false;
								}
							else{
								row_inter.push(begin);
								begin=row1[3-j];
								
						}
						
						
				
						}
				}
			if (first)
				row_inter.push(begin);


			for (var j=0;j<4;j++){
					if (j<row_inter.length)
						{row[i][3-j]=row_inter[j];}
					else
						row[i][3-j]=0;
					
				}

			}
			for (var i=0;i<4;i++){
				for (var j=0;j<4;j++){
					grid_r.push(row[j][i])
				if (row[i][j]!=grid[4*i+j])
						{change=true;}
				}
			}

			}
	}

	return [grid_r,change]
}
/*	else if (direction==38||direction==40){
		for(var i=0;i++;i<4){
			for(var j=0;j++;j<4){
			row[j].push(grid[4*i+j+1])
			}
		
		}
		
	}
		
	}*/
//keypad listener
		var check=true;
		var game2;
	    function move(e){
    	var reponse=modify_grid(game,e.keyCode);
		game2=reponse[0];
		check=reponse[1];



		if (check){
		game=game2;
		var random =2*Math.floor((Math.random()*2)+1);
		var random_index=Math.floor((Math.random()*16));
		var i=0;
	
		while (game[random_index%game.length]!=0 && i<16){
				i++;
				random_index++;}
		if (i===16){

			alert("Game Over");
			restart();}
		else
		game[random_index%game.length]=random;
    	draw_grille();
    }}
    document.addEventListener("keydown",move,false);