const cart = ["soes","dress","shirts"]

 const promise = createOrder(cart);

 promise.then((orderId)=> {console.log(orderId,"order")})

 function createOrder(cart){
    
const pr = new Promise((resolve, reject) => {
    if(!validateCart(cart)){
        const err = new Error("not valid")
        reject(err)
    }
    const orderId = "1234"
    if(orderId){
        setTimeout(() => {resolve(orderId)            
        }, 1000);
    }
})


return pr;
 }


 function validateCart(cart){
    return true
 }

 console.log(promise,"promise");