function modify_grid(grid,direction){
	var change=false;
	var row=[[],[],[],[]];
	var grid_r=[];
	if (!(direction===37||direction==38||direction==39||direction===40)){
		return [grid.slice(),change];}
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
					if (row[j][i]!=grid[4*i+j])
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
				if (row[j][i]!=grid[4*i+j])
						{change=true;}
				}
			}

			}
	}

	return [grid_r,change]
}
