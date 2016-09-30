
var game =[];
for (var i=0;i<16;i++){
		game.push(0)
	}
function random(){
	var zeros=[];
	for (var i=0;i<16;i++){
		if (game[i]==0)
			zeros.push(i)
	}
	var n=zeros.length;

	var index=Math.floor((Math.random()*n));
	var two_or_four=Math.floor((Math.random*10)+1);
	if (Math.floor((Math.random*10)+1)==10)
		game[zeros[index]]=4;
	else
		game[zeros[index]]=2;
	
	
}

function restart(){


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

function draw_grille(){
for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			var number=game[4*i+j]
			if (number==0){
				document.getElementById('tile'+i.toString()+j.toString()).innerHTML="";}
			else{
			document.getElementById('tile'+i.toString()+j.toString()).innerHTML=game[4*i+j];};
		}
}
}

restart();

	    function move(e){
		var check2=false;
		var game2;
	    	var reponse=modify_grid(game,e.keyCode)
			game2=reponse[0];
			var check3=reponse[1];

		if (check3){
			game=game2;
			random();
			draw_grille()
			for(var i=37;i<41;i++){
				var reponse2 =modify_grid(game2,i);
				if (reponse2[1]){
					check2=true;};
				console.log(check2);
				};
			if (!check2){
			alert("Game Over");
			restart();}
			};

    	
	    }


document.addEventListener("keydown",move,false);




