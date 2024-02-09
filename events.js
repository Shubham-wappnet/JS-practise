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

////
const abutton=document.getElementById("open text field");

abutton.addEventListener("click",function(){
  document.getElementById("text-field").style.display="block";
  document.getElementById("submit-button").style.display="block";
});
document.getElementById("submit-button").addEventListener("click",function(){
  var userInput=document.getElementById("text-field").value;
  if(userInput.trim()!=""){
    alert(" you entered "  +userInput);
  }
  else{
    alert("can't enter");
  }
})

