import {createReducer,current } from '@reduxjs/toolkit'

const wishList = createReducer([], (builder) => {
    builder
        .addCase('ADD_WISH', (state, action) => {
            console.log('ADD_WISHsssssssssssssssssssssssssssssssssssssssssssssssssss')
            let product=action.payload
            let current_state=current(state)
            console.log('wishhhhh',action.payload,'-----',current_state)
            return [...current_state, product]
        })
        .addCase('REMOVE_WISH', (state, action) => {
            let product=action.payload
            let current_state=current(state)
            return current_state.filter(x=>x.id!==product.id)
        })
})

export  default wishList