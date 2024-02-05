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
