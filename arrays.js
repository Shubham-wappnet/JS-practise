const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); 
fruits.pop();
fruits.unshift("grapes");
console.log(fruits);
fruits[5]="kiwi";
console.log(Object.keys(fruits));
console.log(fruits.length);

//////
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
//colors.reverse();

const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
console.log(myString)