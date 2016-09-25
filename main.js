
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
restart();

		var check;
		var game2;
	    function move(e){
    	var reponse=modify_grid(game,e.keyCode);
		game2=reponse[0];
		check=reponse[1];


		if (check){
		
		game=game2;
		
		random();
    	draw_grille();
    }
    else{ var fin=true;
    	  var i=0;
    	  
    	while (fin&&i<16){
    		if (game[i]==0){
    			fin=false;
    		}
    		else
    		    i++;
    	}
    	if (fin){
    		alert("Game Over");
    		restart();
    	}
    	}
	    }
document.addEventListener("keydown",move,false);




