let key=prompt("enter key")
let value=prompt("enter value")
localStorage.setItem(key,value)
console.log(`the value at ${key} is ${localstorage.getItem(key)}`)

sessionStorage.setItem(key,value)
console.log(`the value at ${key} is ${sessionStorage.getItem(key)}`)