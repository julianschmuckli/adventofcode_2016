var number=[], end_positions=[],position=5, current_direction;
	number.push("LRRLLLRDRURUDLRDDURULRULLDLRRLRLDULUDDDDLLRRLDUUDULDRURRLDULRRULDLRDUDLRLLLULDUURRRRURURULURRULRURDLULURDRDURDRLRRUUDRULLLLLDRULDDLLRDLURRLDUURDLRLUDLDUDLURLRLDRLUDUULRRRUUULLRDURUDRUDRDRLLDLDDDLDLRRULDUUDULRUDDRLLURDDRLDDUDLLLLULRDDUDDUUULRULUULRLLDULUDLLLLURRLDLUDLDDLDRLRRDRDUDDDLLLLLRRLLRLUDLULLDLDDRRUDDRLRDDURRDULLLURLRDLRRLRDLDURLDDULLLDRRURDULUDUDLLLDDDLLRLDDDLLRRLLURUULULDDDUDULUUURRUUDLDULULDRDDLURURDLDLULDUDUDDDDD");
	number.push("RUURUDRDUULRDDLRLLLULLDDUDRDURDLRUULLLLUDUDRRUDUULRRUUDDURDDDLLLLRRUURULULLUDDLRDUDULRURRDRDLDLDUULUULUDDLUDRLULRUDRDDDLRRUUDRRLULUULDULDDLRLURDRLURRRRULDDRLDLLLRULLDURRLUDULDRDUDRLRLULRURDDRLUDLRURDDRDULUDLDLLLDRLRUDLLLLLDUDRDUURUDDUDLDLDUDLLDLRRDLULLURLDDUDDRDUDLDDUULDRLURRDLDLLUUDLDLURRLDRDDLLDLRLULUDRDLLLDRLRLLLDRUULUDLLURDLLUURUDURDDRDRDDUDDRRLLUULRRDRULRURRULLDDDUDULDDRULRLDURLUDULDLDDDLRULLULULUDLDDRDLRDRDLDULRRLRLRLLLLLDDDRDDULRDULRRLDLUDDDDLUDRLLDLURDLRDLDRDRDURRDUDULLLDLUDLDRLRRDDDRRLRLLULDRLRLLLLDUUURDLLULLUDDRLULRDLDLDURRRUURDUDRDLLLLLLDDDURLDULDRLLDUDRULRRDLDUDRLLUUUDULURRUR");
	number.push("URRRLRLLDDDRRLDLDLUDRDRDLDUDDDLDRRDRLDULRRDRRDUDRRUUDUUUDLLUURLRDRRURRRRUDRLLLLRRDULRDDRUDLRLUDURRLRLDDRRLUULURLURURUDRULDUUDLULUURRRDDLRDLUDRDLDDDLRUDURRLLRDDRDRLRLLRLRUUDRRLDLUDRURUULDUURDRUULDLLDRDLRDUUDLRLRRLUDRRUULRDDRDLDDULRRRURLRDDRLLLRDRLURDLDRUULDRRRLURURUUUULULRURULRLDDDDLULRLRULDUDDULRUULRRRRRLRLRUDDURLDRRDDULLUULLDLUDDDUURLRRLDULUUDDULDDUULLLRUDLLLRDDDLUUURLDUDRLLLDRRLDDLUDLLDLRRRLDDRUULULUURDDLUR");
	number.push("UULDRLUULURDRLDULURLUDULDRRDULULUDLLDURRRURDRLRLLRLDDLURRDLUUDLULRDULDRDLULULULDDLURULLULUDDRRULULULRDULRUURRRUDLRLURDRURDRRUDLDDUURDUUDLULDUDDLUUURURLRRDLULURDURRRURURDUURDRRURRDDULRULRRDRRDRUUUUULRLUUUDUUULLRRDRDULRDDULDRRULRLDLLULUUULUUDRDUUUDLLULDDRRDULUURRDUULLUUDRLLDUDLLLURURLUDDLRURRDRLDDURLDLLUURLDUURULLLRURURLULLLUURUUULLDLRDLUDDRRDDUUDLRURDDDRURUURURRRDLUDRLUULDUDLRUUDRLDRRDLDLDLRUDDDDRRDLDDDLLDLULLRUDDUDDDLDDUURLDUDLRDRURULDULULUDRRDLLRURDULDDRRDLUURUUULULRURDUUDLULLURUDDRLDDUDURRDURRUURLDLLDDUUDLLUURDRULLRRUUURRLLDRRDLURRURDULDDDDRDD");
	number.push("LLRUDRUUDUDLRDRDRRLRDRRUDRDURURRLDDDDLRDURDLRRUDRLLRDDUULRULURRRLRULDUURLRURLRLDUDLLDULULDUUURLRURUDDDDRDDLLURDLDRRUDRLDULLRULULLRURRLLURDLLLRRRRDRULRUDUDUDULUURUUURDDLDRDRUUURLDRULDUDULRLRLULLDURRRRURRRDRULULUDLULDDRLRRULLDURUDDUULRUUURDRRLULRRDLDUDURUUUUUURRUUULURDUUDLLUURDLULUDDLUUULLDURLDRRDDLRRRDRLLDRRLUDRLLLDRUULDUDRDDRDRRRLUDUDRRRLDRLRURDLRULRDUUDRRLLRLUUUUURRURLURDRRUURDRRLULUDULRLLURDLLULDDDLRDULLLUDRLURDDLRURLLRDRDULULDDRDDLDDRUUURDUUUDURRLRDUDLRRLRRRDUULDRDUDRLDLRULDL");

	for(var i=0;i<number.length;i++){
		for(var ia=0;ia<number[i].length;ia++){
			current_direction = number[i].slice(ia,ia+1);
			position = getNewPosition(position,current_direction);
			document.write("Calculating position: "+position);
		}
		end_positions.push(position);
		document.write("<br><br>Number: "+position+"<br><br>");
	}
	document.write("<br><br><b>Code: "+end_positions+"</b>");

	function getNewPosition(position,direction){
		if(direction=="L"){
			if(position==1){
				return 1;
			}else if(position==2){
				return 2;
			}else if(position==3){
				return 2;
			}else if(position==4){
				return 3;
			}else if(position==5){
				return 5;
			}else if(position==6){
				return 5;
			}else if(position==7){
				return 6;
			}else if(position==8){
				return 7;
			}else if(position==9){
				return 8;
			}else if(position==10){
				return 10;
			}else if(position==11){
				return 10;
			}else if(position==12){
				return 11;
			}else if(position==13){
				return 13;
			}
		}else if(direction=="R"){
			if(position==1){
				return 1;
			}else if(position==2){
				return 3;
			}else if(position==3){
				return 4;
			}else if(position==4){
				return 4;
			}else if(position==5){
				return 6;
			}else if(position==6){
				return 7;
			}else if(position==7){
				return 8;
			}else if(position==8){
				return 9;
			}else if(position==9){
				return 9;
			}else if(position==10){
				return 11;
			}else if(position==11){
				return 12;
			}else if(position==12){
				return 12;
			}else if(position==13){
				return 13;
			}
		}else if(direction=="U"){
			if(position==1){
				return 1;
			}else if(position==2){
				return 2;
			}else if(position==3){
				return 1;
			}else if(position==4){
				return 4;
			}else if(position==5){
				return 5;
			}else if(position==6){
				return 2;
			}else if(position==7){
				return 3;
			}else if(position==8){
				return 4;
			}else if(position==9){
				return 9;
			}else if(position==10){
				return 6;
			}else if(position==11){
				return 7;
			}else if(position==12){
				return 8;
			}else if(position==13){
				return 11;
			}
		}else if(direction=="D"){
			if(position==1){
				return 3;
			}else if(position==2){
				return 6;
			}else if(position==3){
				return 7;
			}else if(position==4){
				return 8;
			}else if(position==5){
				return 5;
			}else if(position==6){
				return 10;
			}else if(position==7){
				return 11;
			}else if(position==8){
				return 12;
			}else if(position==9){
				return 9;
			}else if(position==10){
				return 10;
			}else if(position==11){
				return 13;
			}else if(position==12){
				return 12;
			}else if(position==13){
				return 13;
			}
		}
	}