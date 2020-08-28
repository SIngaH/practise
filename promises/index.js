/* one promise */
let thisP =document.querySelector(".this");
let p = new Promise((resolve, reject) =>{
    let a = 1 + 1;
    if(a === 2){
        resolve("success")
    }else{
        reject("failed")
    }
})

p.then((message) =>{
    thisP.innerHTML = "this is in the then " + message
}).catch((message) =>{
    thisP.innerHTML = "this is in the catch " + message

})

/*--------------------------------------------------------------------------------*/
/* many promises at a time */
const firstPromise = new Promise((resolve, reject) =>{
    resolve("first promise")
})
const secondPromise = new Promise((resolve, reject) =>{
    resolve("second promise")
})
const thirdPromise = new Promise((resolve, reject) =>{
    resolve("third promise")
})
/*all at the same time */
Promise.all([
    firstPromise,
    secondPromise, 
    thirdPromise
]).then((messages) =>{
    console.log(messages)

})
/*on at a time and only shows the first message*/
Promise.race([
    firstPromise,
    secondPromise, 
    thirdPromise
]).then((message) =>{
    console.log(message)
})