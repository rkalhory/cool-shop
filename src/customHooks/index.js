import * as api from '../services'
import {useQuery} from "react-query";

function useAllProducts(limit) {
    return useQuery(["products",limit],api.getAllProducts)
}

function useProduct(id) {
    return useQuery(["product",id],api.getProduct)
}
//
// function useCategoryProducts(cat) {
//     return useQuery(["productsCat",cat],api.getCatProducts)
// }
//
function useAllCategories() {
    return useQuery(["categories"],api.getAllCategories)
}




export {useAllProducts,useProduct,useAllCategories}
