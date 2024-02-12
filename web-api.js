let p= fetch("https://inshorts.deta.dev/news")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()             //now if we use response.tetestt() then it shows error, data will be shown only in one format either in json or string
})
p.then((value2)=>{
     console.log(value2)
})

/////

function getLocation(){
    const test=document.getElementById("p02")
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
      } catch {
        test.innerHTML = err;
      }
    }
    
    function showPosition(position) {
      test.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }

//////
function range(){
    const obj=document.getElementById("t01")
    // if(!obj.checkValidity()){                                         // validation using validation message
    //     document.getElementById("p03").innerHTML=obj.validationMessage
    // }
    // else{
    //     document.getElementById("p03").innerHTML="input is ok"
    // }

    let text;                              // validation using custom message 
    if(obj.validity.rangeOverflow){
        text="it is too high"
    }
    else{
        text="input is ok"
    }
    document.getElementById("p03").innerHTML=text;
}
