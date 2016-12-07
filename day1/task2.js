var directions = ["R3", "L5", "R1", "R2", "L5", "R2", "R3", "L2", "L5", "R5", "L4", "L3", "R5", "L1", "R3", "R4", "R1", "L3", "R3", "L2", "L5", "L2", "R4", "R5", "R5", "L4", "L3", "L3", "R4", "R4", "R5", "L5", "L3", "R2", "R2", "L3", "L4", "L5", "R1", "R3", "L3", "R2", "L3", "R5", "L194", "L2", "L5", "R2", "R1", "R1", "L1", "L5", "L4", "R4", "R2", "R2", "L4", "L1", "R2", "R53", "R3", "L5", "R72", "R2", "L5", "R3", "L4", "R187", "L4", "L5", "L2", "R1", "R3", "R5", "L4", "L4", "R2", "R5", "L5", "L4", "L3", "R5", "L2", "R1", "R1", "R4", "L1", "R2", "L3", "R5", "L4", "R2", "L3", "R1", "L4", "R4", "L1", "L2", "R3", "L1", "L1", "R4", "R3", "L4", "R2", "R5", "L2", "L3", "L3", "L1", "R3", "R5", "R2", "R3", "R1", "R2", "L1", "L4", "L5", "L2", "R4", "R5", "L2", "R4", "R4", "L3", "R2", "R1", "L4", "R3", "L3", "L4", "L3", "L1", "R3", "L2", "R2", "L4", "L4", "L5", "R3", "R5", "R3", "L2", "R5", "L2", "L1", "L5", "L1", "R2", "R4", "L5", "R2", "L4", "L5", "L4", "L5", "L2", "L5", "L4", "R5", "R3", "R2", "R2", "L3", "R3", "L2", "L5"];
    var x=0,y=0,compass=0,xs=[],ys=[];
    
    var compass_directions = ["North","East","South","West"];
    
    total: for(var i=0;i<directions.length;i++){
      var direction = directions[i].slice(0,1);
      var blocks = parseInt(directions[i].slice(1));
      
      if(direction=="R" && compass==0){
        for(var ia=0;ia<blocks;ia++){
        	xs.push(x);
          	ys.push(y);
        	x++;
		if(checkOverlap(x,y)){
			break total;
		}
        }
        compass=1;
      }else if(direction=="L" && compass==0){
      	for(var ia=0;ia<blocks;ia++){
        	xs.push(x);
          	ys.push(y);
        	x--;
		if(checkOverlap(x,y)){
			break total;
		}
        }
        compass=3;
      }
      
      else if(direction=="R" && compass==1){
      	for(var ia=0;ia<blocks;ia++){
        	xs.push(x);
          	ys.push(y);
        	y--;
		if(checkOverlap(x,y)){
			break total;
		}
        }
        compass=2;
      }else if(direction=="L" && compass==1){
      	for(var ia=0;ia<blocks;ia++){
        	xs.push(x);
          	ys.push(y);
        	y++;
		if(checkOverlap(x,y)){
			break total;
		}
        }
        compass=0;
      }
      
      else if(direction=="R" && compass==2){
      	for(var ia=0;ia<blocks;ia++){
        	xs.push(x);
          	ys.push(y);
        	x--;
		if(checkOverlap(x,y)){
			break total;
		}
        }
        compass=3;
      }else if(direction=="L" && compass==2){
      	for(var ia=0;ia<blocks;ia++){
        	xs.push(x);
         	ys.push(y);
        	x++;
		if(checkOverlap(x,y)){
			break total;
		}
        }
        compass=1;
      }
      
      else if(direction=="R" && compass==3){
      	for(var ia=0;ia<blocks;ia++){
        	xs.push(x);
          	ys.push(y);
        	y++;
		if(checkOverlap(x,y)){
			break total;
		}
        }
        compass=0;
      }else if(direction=="L" && compass==3){
      	for(var ia=0;ia<blocks;ia++){
        	xs.push(x);
          	ys.push(y);
        	y--;
		if(checkOverlap(x,y)){
			break total;
		}
        }
        compass=2;
      }
	document.writeln(x + ","+y+"<br>");
      clearPage();
    }
    document.writeln("<br><br><b>First overlap:</b><br>"+x+","+y);
    
    function clearPage(){
    	//document.body.innerHTML='';
    }
    function checkOverlap(x,y){
    	for(var ib=0;ib<xs.length;ib++){
      	if(x==xs[ib]&&y==ys[ib]){
        	return true;
        }
      }
      return false;
    }
