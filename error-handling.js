const check=document.getElementById("sub1").innerHTML=" ";

check.addEventListener("click",function(){
    let validate=document.getElementById("fname").value;
    try{
       if(validate.trim()==" ") throw "empty";
       if(isNaN(validate)) throw "not a number";
       validate=Number(validate);
       if(validate<5) throw "it is much low";
       if(validate>20) throw "it is much high";
    }
    catch(err){
         check.innerHTML="input is" +err;
    }
})

////
function doValidation(){
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("text-field").value;
  try { 
    if(x.trim() == "")  throw "it is empty";
    if(isNaN(x)) throw "it is not a number";
    x = Number(x);
    if(x > 10)   throw "it is too high";
    if(x < 5)  throw "it is too low";
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("text-field").value = "";
  }
}
