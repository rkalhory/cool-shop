import { Rating } from 'react-simple-star-rating'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addItem,addWish,removeWish} from '../../redux/action'
import { toast } from 'react-toastify';
import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as heartR} from "@fortawesome/free-regular-svg-icons";
import {useEffect, useState} from "react";

const ProductCart=({product}) => {

    const dispatch=useDispatch()
    const wishList=useSelector(s=>s.wishList)
    const [isWish,setIsWish]=useState(false)

    function addToCart() {
        dispatch(addItem(product))
        toast.success('به سبد خرید اضافه شد!')
    }

    useEffect(()=>{
        if(wishList.length){
            const exist=wishList.find((x)=>x.id===product.id)
            setIsWish(!!exist)
        }
    },[wishList])


    function handleWishList(){
        const exist=wishList.find((x)=>x.id===product.id)
        if(!exist){
            dispatch(addWish(product))
        }else {
            dispatch(removeWish(product))
        }
    }



    return (
        <div className='product-cart'>
            <button type='button' className={`add-wish ${isWish?'active':''}`} onClick={handleWishList}><FontAwesomeIcon icon={isWish?faHeart:heartR} /></button>
            <Link to={`/products/${product?.id}`}><img src={product?.images[0]} alt={product?.title}/></Link>
            <div className='content'>
                {/*<Link to={`/products/${product?.id}`} className='title'>{product?.title.substring(0,20)}</Link>*/}
                <Link to={`/products/${product?.id}`} className='title'>{product?.title}</Link>
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <Rating ratingValue={(product?.rating?.rate * 100) / 5} size={15} readonly={true}/>
                    <span className='cost'>{product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>تومان</span></span>
                </div>
                <button type='button' className='cart-btn' onClick={addToCart}>افزودن به سبد خرید</button>
            </div>
        </div>
    )
}


export default ProductCart