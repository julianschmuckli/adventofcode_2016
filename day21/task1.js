var input = "abcdefgh";
var commands = "rotate right 3 steps|swap letter b with letter a|move position 3 to position 4|swap position 0 with position 7|swap letter f with letter h|rotate based on position of letter f|rotate based on position of letter b|swap position 3 with position 0|swap position 6 with position 1|move position 4 to position 0|rotate based on position of letter d|swap letter d with letter h|reverse positions 5 through 6|rotate based on position of letter h|reverse positions 4 through 5|move position 3 to position 6|rotate based on position of letter e|rotate based on position of letter c|rotate right 2 steps|reverse positions 5 through 6|rotate right 3 steps|rotate based on position of letter b|rotate right 5 steps|swap position 5 with position 6|move position 6 to position 4|rotate left 0 steps|swap position 3 with position 5|move position 4 to position 7|reverse positions 0 through 7|rotate left 4 steps|rotate based on position of letter d|rotate left 3 steps|swap position 0 with position 7|rotate based on position of letter e|swap letter e with letter a|rotate based on position of letter c|swap position 3 with position 2|rotate based on position of letter d|reverse positions 2 through 4|rotate based on position of letter g|move position 3 to position 0|move position 3 to position 5|swap letter b with letter d|reverse positions 1 through 5|reverse positions 0 through 1|rotate based on position of letter a|reverse positions 2 through 5|swap position 1 with position 6|swap letter f with letter e|swap position 5 with position 1|rotate based on position of letter a|move position 1 to position 6|swap letter e with letter d|reverse positions 4 through 7|swap position 7 with position 5|swap letter c with letter g|swap letter e with letter g|rotate left 4 steps|swap letter c with letter a|rotate left 0 steps|swap position 0 with position 1|reverse positions 1 through 4|rotate based on position of letter d|swap position 4 with position 2|rotate right 0 steps|swap position 1 with position 0|swap letter c with letter a|swap position 7 with position 3|swap letter a with letter f|reverse positions 3 through 7|rotate right 1 step|swap letter h with letter c|move position 1 to position 3|swap position 4 with position 2|rotate based on position of letter b|reverse positions 5 through 6|move position 5 to position 3|swap letter b with letter g|rotate right 6 steps|reverse positions 6 through 7|swap position 2 with position 5|rotate based on position of letter e|swap position 1 with position 7|swap position 1 with position 5|reverse positions 2 through 7|reverse positions 5 through 7|rotate left 3 steps|rotate based on position of letter b|rotate left 3 steps|swap letter e with letter c|rotate based on position of letter a|swap letter f with letter a|swap position 0 with position 6|swap position 4 with position 7|reverse positions 0 through 5|reverse positions 3 through 5|swap letter d with letter e|move position 0 to position 7|move position 1 to position 3|reverse positions 4 through 7";

var data=input.split(""),temp,length=data.length,data_commands=commands.split("|");

for(var ic=0;ic<data_commands.length;ic++){
	var current_command = data_commands[ic].split(" ");
	switch(current_command[0]){
		case "swap":
			if(current_command[1]=="letter"){
				swapLetter(current_command[2],current_command[5]);
			}else{
				swap(current_command[2],current_command[5]);
			}
			break;
		case "rotate":
			if(current_command[1]=="based"){
				rotateLetter(current_command[6]);
			}else{
				rotate(current_command[1],current_command[2]);
			}
			break;
		case "reverse":
			reverse(current_command[2],current_command[4]);
			break;
		case "move":
			move(current_command[2],current_command[5]);
			break;
		default:
			console.log("Invalid argument");
			break;
	}
	console.log("Command: ("+data_commands[ic]+") Data: "+data.join(""));
	if(data.indexOf(undefined)!==-1){
		console.error("Error: undefined find");
	}
}
console.log("Result: "+data.join(""));

//Main functions
function swap(x,y){
	if(length>x&&length>y){
		temp = data[y];
		data[y]=data[x];
		data[x]=temp;
	}
}

function swapLetter(x,y){
	x = getIndex(x);
	y = getIndex(y);
	if(x!=-1&&y!=-1){
		swap(x,y);
	}
}

function rotate(direction,steps){
	if(steps!=0){
		switch(direction){
			case "left":
				for(var ia=0;ia<steps;ia++){
					data[length]=data[0];
					for(var i=0;i<length;i++){
						data[i]=data[i+1];
					}
				}
				data.pop();
				break;
			case "right":
				for(var ia=0;ia<steps;ia++){
					temp=data[length-1];
					for (var i = length-1; i >= 0; i--){
						data[i]=data[i-1];
					}
					data[0]=temp;
				}
				break;
		}
	}
}

function rotateLetter(letter){
	var index = getIndex(letter);
	var times = index+1;
	if(index>=4){
		times++;
	}
	rotate('right',times);
}

function reverse(x,y){
	temp = [];
	x = parseInt(x);
	y = parseInt(y);
	for(var i=0;i<=(y-x);i++){
		var temp_index = x+i;
		temp.push(data[temp_index]);
	}
	for(var i=0;i<=(y-x);i++){
		data.splice(x,1);
	}
	temp.reverse();
	for(var i=0;i<=(y-x);i++){
		data.splice(x+i, 0, temp[i]);
	}
}

function move(get,set){
	temp = data[get];
	data.splice(get,1);
	data.splice(set, 0, temp);
}

//Other functions
function getIndex(letter){
	return data.indexOf(letter);
}
