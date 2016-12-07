var directions = ["R3", "L5", "R1", "R2", "L5", "R2", "R3", "L2", "L5", "R5", "L4", "L3", "R5", "L1", "R3", "R4", "R1", "L3", "R3", "L2", "L5", "L2", "R4", "R5", "R5", "L4", "L3", "L3", "R4", "R4", "R5", "L5", "L3", "R2", "R2", "L3", "L4", "L5", "R1", "R3", "L3", "R2", "L3", "R5", "L194", "L2", "L5", "R2", "R1", "R1", "L1", "L5", "L4", "R4", "R2", "R2", "L4", "L1", "R2", "R53", "R3", "L5", "R72", "R2", "L5", "R3", "L4", "R187", "L4", "L5", "L2", "R1", "R3", "R5", "L4", "L4", "R2", "R5", "L5", "L4", "L3", "R5", "L2", "R1", "R1", "R4", "L1", "R2", "L3", "R5", "L4", "R2", "L3", "R1", "L4", "R4", "L1", "L2", "R3", "L1", "L1", "R4", "R3", "L4", "R2", "R5", "L2", "L3", "L3", "L1", "R3", "R5", "R2", "R3", "R1", "R2", "L1", "L4", "L5", "L2", "R4", "R5", "L2", "R4", "R4", "L3", "R2", "R1", "L4", "R3", "L3", "L4", "L3", "L1", "R3", "L2", "R2", "L4", "L4", "L5", "R3", "R5", "R3", "L2", "R5", "L2", "L1", "L5", "L1", "R2", "R4", "L5", "R2", "L4", "L5", "L4", "L5", "L2", "L5", "L4", "R5", "R3", "R2", "R2", "L3", "R3", "L2", "L5"];
var x=0,y=0,compass=0,temp;

var compass_directions = ["North","East","South","West"];

for(var i=0;i<directions.length;i++){
  var direction = directions[i].slice(0,1);
  var blocks = parseInt(directions[i].slice(1));
  if(direction=="R" && compass==0){
    x+=blocks;
    compass=1;
  }else if(direction=="L" && compass==0){
    x-=blocks;
    compass=3;
  }

  else if(direction=="R" && compass==1){
    y-=blocks;
    compass=2;
  }else if(direction=="L" && compass==1){
    y+=blocks;
    compass=0;
  }

  else if(direction=="R" && compass==2){
    x-=blocks;
    compass=3;
  }else if(direction=="L" && compass==2){
    x+=blocks;
    compass=1;
  }

  else if(direction=="R" && compass==3){
    y+=blocks;
    compass=0;
  }else if(direction=="L" && compass==3){
    y-=blocks;
    compass=2;
  }
  document.writeln("<i>Current position:</i><br>"+x+","+y+" | "+compass_directions[compass]+"<br>");
}
document.writeln("<br><br><b>End position:</b><br>"+x+","+y);
