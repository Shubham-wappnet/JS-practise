let a=5;
let b=(20.00+30)*a;
console.log(b);
let x=5.00;
if(a===x){
    console.log("both are same");
}
else if(a==x){
    console.log("both have equal value");
}
else{
    console.log("nan");
}

let m="abc";
let n="pqrs";
let res=m+ " "+n;
console.log(m>n);
console.log(m<n);
console.log(m<=n);

if(typeof(m)==typeof(n)|m>n){
    console.log("equal strings");
}
else if(m>n & typeof(m)==typeof(n)){
    console.log("not equal")
}

console.log(b<<a);
console.log(b>>a);


let txt1="Such a nice";
txt1+="morning";
console.log(txt1);

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  console.log(auto instanceof Object);

  const vehicle=('suzuki','M7',2000);
  console.log(vehicle instanceof Car);
  