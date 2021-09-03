const amounts = [61.00, 52.25, 112.99, 5.00]; 

let total = 0;
//Here we are using a for Loop to total all the amounts in the array
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);

const points = [25,32,21,19,18,29];

let totalPoints = 0;

for(let point of points)
{
  totalPoints += point;
}
 console.log("total points",totalPoints);