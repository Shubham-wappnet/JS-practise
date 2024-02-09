// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); 
// fruits.pop();
// fruits.unshift("grapes");
// console.log(fruits);
// fruits[5]="kiwi";
// console.log(Object.keys(fruits));
// console.log(fruits.length);

// //////
// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
// //colors.reverse();

// const arr = ["John", "Peter", "Sally", "Jane"];

// let myString = JSON.stringify(arr);
// console.log(myString)

const arr1=['1','2','2','4','3','5']
const arr2=arr1.filter((value,index,self)=>{
  return self.indexOf(value)==index;
})
const arr3=arr2.sort();
console.log(arr3)
//const arr2=[...new Set(arr1)];
//const arr3=arr1.sort();
