const add =(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}

add(2,7,(sum)=>{
    console.log(sum)
})