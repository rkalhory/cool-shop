import {createReducer,current } from '@reduxjs/toolkit'

const cart = createReducer([], (builder) => {
    builder
        .addCase('ADD_ITEM', (state, action) => {
            let product=action.payload
            let current_state=current(state)
            const exist=current_state.find((x)=>x.product.id===product.id)
            if(!!exist){
                return current_state.map(x=>
                    x.product.id===product.id?{...x,qty:x.qty+1}:x)
            }else{
                return [...current_state, {product,qty:1}]
            }
        })
        .addCase('DECREASE_ITEM', (state, action) => {
            let {product}=action.payload
            let current_state=current(state)
            const exist=current_state.find((x)=>x.product.id===product.id)
            if(exist.qty===1){
                return current_state.filter(x=>x.product.id!==product.id)
            }else{
                return current_state.map(x=>
                    x.product.id===product.id?{...x,qty:x.qty-1}:x
                )
            }
        })
        .addCase('REMOVE_ITEM', (state, action) => {
            let product=action.payload
            let current_state=current(state)
            return current_state.filter(x=>x.product.id!==product.id)
        })
})

export  default cart