let sum = 0;
const n = 100

for (let i = 1; i <= n; i++) {
    if(i==50){
        continue;
    }
    else if(i==99){
        break;
    }
    sum += i; 

}
console.log('sum:', sum);

var myfriends=['a','b','c','d'];
for(let elements in myfriends){
    console.log(elements);
}
for(let x of myfriends){
    console.log(x);
}

myfriends.forEach((element,index,array)=>{
    console.log(element +" " + index +" " + array);
});

let j=1;
while(j<10){
    
    console.log(j);
    j++;
}

const fruits = 'Papayas';
switch (fruits) {
  case 'Oranges':
    console.log('Oranges are $1 ');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2 ');
    break;
    default:
    console.log(`Sorry, we are out of ${expr}.`);
}

try{
    let y=10;
    let x=y/0;
}
catch(err){
    console.log("arithmatic exception", err);
}
