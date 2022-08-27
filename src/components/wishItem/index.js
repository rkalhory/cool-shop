import { Rating } from 'react-simple-star-rating'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem,removeWish} from '../../redux/action'
import { toast } from 'react-toastify';
import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";

const WishItem=({product}) => {

    const dispatch=useDispatch()

    function addToCart() {
        dispatch(addItem(product))
        toast.success('به سبد خرید اضافه شد!')
    }

    return (
        <div className='wish-cart product-cart'>
            <Link to={`/products/${product?.id}`}><img src={product?.images[0]} alt={product?.title}/></Link>
            <div className='content'>
                <Link to={`/products/${product?.id}`} className='title'>{product?.title}</Link>
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <Rating ratingValue={(product?.rating?.rate * 100) / 5} size={13} readonly={true}/>
                    <span className='cost'>{product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>تومان</span></span>
                </div>
                <div className='d-flex mt-20'>
                    <button type='button' className='wish-remove' onClick={()=>dispatch(removeWish(product))}><FontAwesomeIcon icon={faTrashCan} /> حذف</button>
                    <button type='button' className='cart-add' onClick={addToCart}>افزودن به سبد خرید</button>
                </div>

            </div>
        </div>
    )
}


export default WishItem