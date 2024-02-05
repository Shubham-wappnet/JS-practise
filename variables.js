function f1(){
    var x=5;
    console.log(x);
}
f1();
console.log(x);   //this shows error

//if we are using
var x=5;
function f1(){
    var y=10;
    console.log(x,y);
}
f1();
console.log(x);

let x=5;
function f1(){
    let y=10;
    console.log(x,y);
}
f1();
console.log(x);
console.log(y);  //shows error

let a=5;
if(true){
    let a=10;
    console.log(a);
}
console.log(a);

const m=20;
function f1(){
    const m=10;
    console.log(m);
}
f1();
console.log(n);

const n=20;
function f1(){
     n=10;      //shows error 
    console.log(n); 
}
f1();

const b={
    prop1:"Shubham",
    prop2:20,
    prop3:"intern"
}
b.prop2=21;
console.log(b);

