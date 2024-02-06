function outerside(){
    const x=4;
    //return x*x;
    function innerside(x){
        const y=5;
        return x*y;
    }
    console.log(innerside(x));
}
console.log(outerside());

const createPet = function (name) {
    let gender;
    const pet = {
       setName(newName) {
        name = newName;
      },
  
      getName() {
        return name;
      },
  
      getgender() {
        return gender;
      },
  
      setgender(newgender) {
        if (
          typeof newgender === "string" &&
          (newgender.toLowerCase() === "male" || newgender.toLowerCase() === "female")
        ) {
          gender = newgender;
        }
      },
    };
  
    return pet;
  };
  
  const pet = createPet("Vivie");
  console.log(pet.getName()); 
  
  pet.setName("Oliver");
  pet.setgender("male");
  console.log(pet.getgender()); 
  console.log(pet.getName()); 

  function myConcat(separator) {
    let result = ""; 
    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
    }
    return result;
  }
  console.log(myConcat("|", "acc", "blue", "red"));
  
function myFunction(...theargs){   //rest parameter
    let total=0;
    for(let args of theargs){
        total+=args;
    }
    return total;
}
console.log(myFunction(1,3,5,7));
console.log(myFunction(6,0,4));

const arr=['aghnk','b35h','cy54','d5j','e'];
let x=arr.map((ele)=>ele.length);
console.log(x);

function person(){
    this. age=0;
    
    const limit=setInterval(()=>{
       this.age++;
       console.log(+"age is incremented by"+ `${this.age}`);
       if(this.age>=13){
        clearInterval(limit);
       }
    },1000)
 
}
const p=new person();
