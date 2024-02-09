let biganimal={
    eat:true
};
let rabbit={
    jump:true
};
console.log(rabbit)
rabbit._proto_=animal
console.log(rabbit)


//
let animal = {
  eat: true,
  walk() {
      console.log("animal can walk")
  }
};

let rabbit = {          // simple type proto
  jump: true,
   __proto__: animal
};

rabbit.walk();       // multilevel type proto

let dog={
  __proto__:rabbit
}
console.log(dog)

let cat={           //hierarchy type proto     &  multiple type is not supported
  pet:true,
  __proto__:animal,
  
}
cat.walk();
console.log(rabbit)


////
let employee={
  onTime:"yes",
  honest(){          // method is declared without body

  }
}
let emp1={
  __proto__:employee
}
emp1.honest=function(){
  console.log("yes, employee is honest")
}
emp1.honest();


//
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};
 console.log(user.fullName);
 console.log(admin.fullName); 

// setter triggers!
admin.fullName = "Alice Cooper"; 

console.log(admin.fullName); 
console.log(user.fullName); 


//
let arr = [1, 2, 3];

console.log( arr.__proto__ === Array.prototype ); 

console.log( arr.__proto__.__proto__ === Object.prototype );

console.log( arr.__proto__.__proto__.__proto__ );         // and null on the top.

///
let obj = {
  0: "Hello",        //convert objet into array
  1: "world!",
  length: 2,           
};
obj.join = Array.prototype.join;
console.log( obj.join(',') ); 

////
class myclass{
  constructor(name){
    this.name=name;
  }
   sayhi(){
     console.log(`hi ${this.name}`)
  }
}
let class1=new myclass("Shubham");
class1.sayhi();
