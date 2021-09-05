const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


let i = 0;

while(i < ingredients.length)
{
  console.log(ingredients[i]);
  i++;
}

for(let index = 0; index < ingredients.length;index++)
{
  console.log(ingredients[index]);
}


for(let index1 = ingredients.length; index1 >= 0; index1--)
{
  console.log(ingredients[index1]);
}