var input = 3018458;
	
	var presents = [],hasWinner=true,chance=1,last_elf=input-1,times=0;
	console.log("Giving Presents...");
	for(var i = 0;i<input;i++){
		presents.push(1);
	}
	console.log("Started stealing Presents...");
	whole: while(true){
		for(var i = 0;i<input;i++){
			times++;
			if(presents[i]!=0){
				var next = findNextElf(i);
				if(next==i){
					break whole;
				}
				presents[i]+=presents[next];
				presents[next]=0;
				
				if(times>=50000){
					console.log("Preparing: Elf "+i+" stole Elf "+next);
					times=0;
				}
				next=0;
			}
		}
	}
	document.write("Winner: "+(i+1));
	
	function findNextElf(i){
		for(var ia=i+1;ia<input;ia++){
			if(presents[ia]==0){
				continue;
			}else{
				return ia;
			}
		}
		for(var ia=0;ia<i;ia++){
			if(presents[ia]==0){
				continue;
			}else{
				return ia;
			}
		}
		return i;
	}
