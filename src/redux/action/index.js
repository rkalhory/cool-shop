// import {createAction} from "@reduxjs/toolkit";
//
// const addToWish=createAction('ADD_WISH')
// const removeFromWish=createAction('REMOVE_WISH')
//
// export function addWish(payload){
//     return function (dispatch){
//         dispatch(addToWish(payload))
//     }
// }
//
// export function removeWish(payload){
//     return function (dispatch){
//         dispatch(removeFromWish(payload))
//     }
// }


export const addItem=(product)=>{
    return{
        type:'ADD_ITEM',
        payload:product
    }
}

export const decreaseItem=(product)=>{
    return{
        type:'DECREASE_ITEM',
        payload:product
    }
}

export const removeItem=(product)=>{
    return{
        type:'REMOVE_ITEM',
        payload:product
    }
}

export const addWish=(product)=>{
    return{
        type:'ADD_WISH',
        payload:product
    }
}

export const removeWish=(product)=>{
    return{
        type:'REMOVE_WISH',
        payload:product
    }
}