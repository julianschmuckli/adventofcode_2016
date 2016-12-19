var input = 3018458;
	
	var presents = [],times=0,skip=5000;
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
					console.log("Found elf: "+(i+1));
					break whole;
				}
				presents[i]+=presents[next];
				presents[next]=0;
				
				if(times>=skip){
					console.log("Elf "+i+" stole Presents from Elf "+next);
					console.log("Skipped next "+skip+" to increase processspeed.");
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
