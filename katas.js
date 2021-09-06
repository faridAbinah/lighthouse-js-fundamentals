let numbers = [1,2,3,4,5,6,7,8,9,10];


function sumLargestNumbers(numbers)
{
  let largestNumber1 = 0;
  let largestNumber2 = 0;
  let sum = 0;
  
  for(let number of numbers)
  {
    
    if(number > largestNumber1)
    {
      largestNumber1 = number;

    }
   
   }

   for(let number of numbers)
   {
     if(number > largestNumber2 && number !== largestNumber1)
     {
       largestNumber2 = number;
     }
   }


   sum = largestNumber1 + largestNumber2;

  

  return sum;
}


console.log(sumLargestNumbers(numbers));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));