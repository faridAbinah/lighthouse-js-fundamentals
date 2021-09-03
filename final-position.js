const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


function finalPosition(moves) {

  let finalPosition = [0,0];
  

  for(let move of moves)
  {
   
    let x = finalPosition[0];
    let y = finalPosition[1];

    if(move === "north")
    {
      finalPosition[1] += 1;
    }
    else if(move === "west")
    {
      finalPosition[0] -= 1;
    }
    else if(move === "east")
    {
      finalPosition[0] += 1;
    }
    else if(move === "south")
    {
      finalPosition[1] -= 1;
    }
   
  }

  return finalPosition;
}

console.log(finalPosition(moves));