import axios from "axios";

const instance=axios.create({
    baseURL:'https://fakestoreapi.com'
})

async function getAllProducts(key) {
    let limit = key.queryKey[1]
    let url=`/products${limit?`?limit=${limit}`:''}`
    const {data}=await instance.get(url)
    return data
}

async function getProduct(key) {
    let id = key.queryKey[1]
    const {data}=await instance.get(`/products/${id}`)
    return data
}

async function getCatProducts(key) {
    let category = key.queryKey[1]
    const {data}=await instance.get(`/products/category/${category}`)
    return data
}

async function getAllCategories() {
    const {data}=await instance.get(`/products/categories`)
    return data
}

export {getAllProducts,getProduct,getCatProducts,getAllCategories}