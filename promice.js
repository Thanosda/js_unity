var promise1=  new promise((R ,b)=>{

var tech =true
if (tech){
 resolve("it is true")

}
else{
    reject ("it is false")
}


})
promise.then((c)=>{
    console.log("result",c)
})
promise.error((c)=>{
    console.log("result",c)
})
promise.finally((c)=>{
    console.log("result",c)
})