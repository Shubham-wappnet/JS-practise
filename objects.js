// const sample= { cylinders: 4, size: 2.2 };
// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine:sample
//   };

// console.log(myHonda.engine); 
// delete myHonda.color;       //delete property
// console.log(myHonda); 
// let x=myHonda.engine;       //delete object of object
// console.log(x)
// delete x.cylinders;
// console.log(myHonda); 



//////
// function person(name,age,city){
//    this.name=name;
//    this.age=age;
//    this.city=city;
//    console.log(`${this.name}`+""+`${this.age}`+""+`${this.city}`)
// }

// const p1=new person("Rohan",22,"ahe");
// const p2=new person("Mihir",21,"ank");

// /////
// const person={
//     name:"Shubham Lad",
//     age:21,
//     company:"Wappnet",
//     showInfo:function(){
//         if(typeof(person.name)==typeof(person.age)){
//             console.log(`${person.name} ${person.age}`);
//         }
//         else {
//              console.log(`${person.name}` + "is working at" +`${person.company}`);
//         }
//     }

// }
// console.log(person.showInfo());


// /////
// const Animal = {
//     type: "Invertebrates", 
//     displayType() {
//       console.log(this.type);
//     },
//   };
  
//   const animal1 = Object.create(Animal);
//   animal1.displayType(); 

//   const animal2 = Object.create(Animal);
//   animal2.type = "Fishes";
//   animal2.displayType(); 

//////
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
//   person.age=person.age.toString();
//   console.log(person)
  
//   let txt = "";
//   for (let x in person) {
//     txt += person[x] + " " ;
//   };
//   console.log(txt);
//  const arr1=Object.values(txt);
//   console.log(arr1)

//   let str=JSON.stringify(person);
//   console.log(str)
  
////
// function f1(){
//     let n=0;
//     return{
//         next:function(){
//             n+=10;
//             return{
//                 value:n,done:false
//             }
//         }
//     }
// }
// const n=f1();
// console.log(n.next());
// console.log(n.next());

////
const a = "a";
const b = "b";
const c = "c";
const letters = new Set();

letters.add(a);
letters.add(b);
letters.add(c);
//console.log(letters);
const myletter=letters.values();
console.log(myletter)

let arr1=[1,2,3,4,5];
let arr2=arr1.map((curele)=>{
    return curele*2;
    
}).filter((curele)=>{
    return curele<10;
}).reduce((accu,curele)=>{
    return accu=accu+curele;
})
console.log(arr2);