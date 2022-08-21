import axios from "axios";

const instance=axios.create({
    baseURL:'https://my-json-server.typicode.com/rkalhory/api-shop'
})

async function getAllProducts(key) {
    let limit = key.queryKey[1]
    // let url=`/products${limit?`?limit=${limit}`:''}`
    const {data}=await instance.get('/products')
    return data
}

async function getProduct(key) {
    let id = key.queryKey[1]
    const {data}=await instance.get(`/products/${id}`)
    return data
}

// async function getCatProducts(key) {
//     let category = key.queryKey[1]
//     const {data}=await instance.get(`/categories/${category}`)
//
//     let filter=products.filter(p=>p.category===cat)
//
//     return data
// }
//
async function getAllCategories() {
    const {data}=await instance.get(`/categories`)
    return data
}

export {getAllProducts,getProduct,getAllCategories}