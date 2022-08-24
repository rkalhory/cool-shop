import cart from './cart'
import wishList from './wishList'
import {combineReducers} from 'redux'

export default combineReducers({
    wishList,
    cart,
})