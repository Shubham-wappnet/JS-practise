// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: { cylinders: 4, size: 2.2 },
//   };
// console.log(myHonda);  

function person(name,age,city){
   this.name=name;
   this.age=age;
   this.city=city;
   console.log(`${this.name}`+""+`${this.age}`+""+`${this.city}`)
}

const p1=new person("Rohan",22,"ahe");
const p2=new person("Mihir",21,"ank");

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