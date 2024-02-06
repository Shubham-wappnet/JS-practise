/*let x="software trainee";
let y=10;
//let y="10";
let a=x+y;
console.log(a);
console.log(typeof(x));

let m=56.66;
let n=50;
let res=m+n;
console.log(res);
console.log(typeof(res));

let b=60.00;
let c=60;
if(b==c){
    console.log("both are same");
}
else{
    console.log("different");
}*/

const cars=["SUV","THAR","BMW"];
// console.log(typeof(cars));
cars.push("safari");
cars.shift();
const newcar=cars.indexOf("THAR");
if(newcar!=2){
    console.log(cars.splice(1,1,"AUDI"));
}
else{
    console.log(newcar);
}
console.log(cars);

const person={
    name:"Shubham Lad",
    age:21,
    company:"Wappnet",
    showInfo:function(){
        if(typeof(person.name)==typeof(person.age)){
            console.log(`${person.name} ${person.age}`);
        }
        else {
             console.log(`${person.name}` + "is working at" +`${person.company}`);
        }
    }

}
console.log(person.showInfo());