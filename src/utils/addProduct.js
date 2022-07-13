function addCart(product) {
    let cart=JSON.parse(localStorage.getItem('cart'))||[]
    let temp=[]
    if(cart.some(p => p.id === product.id)){
        temp = cart.map((p) =>
            p.id === product.id ? { ...p, count: parseInt(p.count)+1 } : p
        );
    }else{
        temp=[...cart,{...product,count:1}]
    }
    localStorage.setItem('cart',JSON.stringify(temp))
}



export {addCart}