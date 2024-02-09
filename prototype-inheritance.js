// let animal={
//     eat:true
// };
// let rabbit={
//     jump:true
// };
// console.log(rabbit)
// rabbit._proto_=animal
// console.log(rabbit)


////
let animal={
    eat:true,
    Walk(){
      console.log("animal can walk")
    }
};
let rabbit={
    jump:true,
    _proto_:animal
}
rabbit.Walk();
console.log(rabbit)