// const btn=document.querySelector(button);
// function myfunction(no){
//    return(Math.floor(Math.random()*(no+1)));
// }

document.getElementById("demo2").onclick=showMsg;
function showMsg(){
    alert("Welcome to edge");
}

//////
document.getElementById('btn1').onclick=displayDate;
function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}

//////
document.getElementById("demo3").onmousemove=displayYear; 
let timer;
function displayYear(){
    let d=new Date();
    let year=d.getFullYear();
    document.getElementById("demo3").innerHTML = "Show current year " + year;
    timer=setTimeout(removeYear,2000);
    
}
function removeYear(){
   document.getElementById("demo3").innerHTML="Show current year";
   
}


//////
const btn = document.getElementById("btn2");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const Col1 = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = Col1;
});