function f1(a,b){
    var a,b;
    var total=a+b;
    console.log(total);
}
f1(10,20)

var myexp=function(x,y){
    return x*y;
}
console.log(myexp(5,8));

///////
function manufacture(ele){
    ele.model="M2x";        // excess object using function
    ele[1]='g';             // excess array using function
}

 const car={
  make: "Honda",
  model: "Accord",
  year: 1998,
 };
 console.log(car.model);
 manufacture(car);
 console.log(car.model);

 const arr=['a','b','c','d'];
 console.log(arr[1]);
 manufacture(arr);
 console.log(arr[1]);

/////
 function Map(f,a){
    const arr1=new Array(a.length);
    for(let i=0;i<a.length;i++){
        arr1[i]=f(a[i]);
    }
    return arr1;
 }
 const square=function(x){
    return x*x;
 }
const no=['0','1','2','3'];
console.log(Map(square,no));


/////
console.log(cube(3));
function cube(n){
    return n*n*n;
}
console.log(exp(3));     //hoisting is not working with function expression
const exp=function(){    
    return n*n*n;
}


////
const num1=10;
const num2=20;
const name="abc";

function f1(){
    console.log(`${name}` +" has scored "+ `${num1+num2}`);  //global scope
}
f1();   

function f2(){
    const num1=5;
    const num2=10;
    return num1+num2;      //functional scope
}

console.log(`${name}` + " has scoed "+ f2());

function f3(n){
    if(n<=0){
        return;
    }
   console.log(`${n}`);
   f3(n-1); 
   //console.log(`${n-1}`);
}
f3(4);

/////
function outside(){       //nested function with name conflict
    const x=4;
    function inside(x){
       return x*5;
    }
    return inside();
}
console.log(outside(10));

