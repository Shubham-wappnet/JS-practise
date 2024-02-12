async function Weather() {
    let gujweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("26 deg")
        }, 1000)
    });
    let rajweather = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve("40 deg")
        }, 5000)
    })
    // gujweather.then(console.log("a normal day"))
    // rajweather.then(console.log("a hot day"))
    // gujweather.then(console.log("a normal day"))
    let gujW=await gujweather
    let rajW=await rajweather
    console.log(rajW)
    console.log(gujW)
    //console.log(rajW)
    
}
Weather();


