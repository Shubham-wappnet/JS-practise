let w;
function startWorker(){
    if(typeof(Worker)!=="undefined"){
        if(typeof(w)=="undefined"){
            w=new Worker("demo_worker.js")
        }
        w.onmessage=function(event){
            document.getElementById("web1").innerHTML=event.data;
        };
    }
    
    else{
        console.log("web-worker is not supported")
    }
}

function stopWorker(){
    if(typeof(w)!=="undefined"){
        w.terminate();
        w=undefined;
    }
    
}
