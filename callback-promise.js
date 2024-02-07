// const funA=()=>{
//     setTimeout(function(){
//         console.log("Welcome A")
//       funC(); 
//     },2000)
    
// }
// const funB=()=>{
//     console.log("Welcome B")
// }
// const funC=()=>{
//     console.log("WElcome C")
// }
// funA();
// funB();

/////

// const friend1=(friend,rightfriend)=>{            //another function is passed as a argument -callback
//     console.log(`friend1 is talking with ${friend}`)
//     rightfriend();
// }
// const friend2=()=>{
//     console.log("friend2 is busy")
// }
// friend1("Mihir",friend2)


/////
// function fetchdata(running){
//     setTimeout(()=> {
//        const data={id:1,
//                    name:"John",
//                    year:2003};
//     running(data) 
                  
//     },4000)
   
// }
// function process(data){                 //pass data of function fetchdata into process function
//     console.log("data processed" ,data)
// }
// fetchdata(process)
// process()


////
function fetchDataFromAPI(callback) {
    setTimeout(() => {
      const data = { id: 1, name: 'Data from API' };
      callback(null, data); 
    }, 2000); 
    
  }
  // Callback hell: nested callbacks for multiple API requests
  fetchDataFromAPI((error1, data1) => {
    if (error1) {
      console.error('Error fetching data 1:', error1);
    } else {
      console.log('Data 1:', data1);
      fetchDataFromAPI((error2, data2) => {
        if (error2) {
          console.error('Error fetching data 2:', error2);
        } else {
          console.log('Data 2:', data2);
          fetchDataFromAPI((error3, data3) => {
            if (error3) {
              console.error('Error fetching data 3:', error3);
            } else {
              console.log('Data 3:', data3);
              // Process the fetched data here
            }
          });
        }
      });
    }
  });

  function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: 'Data from API' };
        resolve(data); // Resolve with data
      
      }, 2000); 
    });
  }
  
  // Promise chaining for multiple API requests
  fetchDataFromAPI()
    .then(data1 => {
      console.log('Data 1:', data1);
      return fetchDataFromAPI(); // Return a promise for the next request
    })
    .then(data2 => {
      console.log('Data 2:', data2);
      return fetchDataFromAPI(); // Return a promise for the next request
    })
    .then(data3 => {
      console.log('Data 3:', data3);
      // Process the fetched data here
    })
    .catch(error => {
      console.error('Error:', error);
    });