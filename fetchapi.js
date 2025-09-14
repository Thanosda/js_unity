

fetch("https://fakestoreapi.com/products/1")
.then((responce)=>{
    if(!responce.ok){
        throw new Error("data not found")

    }
    else{
        return responce.json()
    }

})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("error",error.message)
})