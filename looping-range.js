

function range(start,end,step)
{
  let output = [];

  if (typeof end === 'undefined' || typeof start === 'undefined' || typeof step === 'undefined' || step < 0) {
    end = start;
    start = 0;
  }

  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));




console.log(range(0, 10, 2));