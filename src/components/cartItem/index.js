import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import {useDispatch} from "react-redux";
import {addItem, decreaseItem, removeItem} from "../../redux/action";
import {Rating} from "react-simple-star-rating";
import './style.scss'

const CartItem = ({item}) =>{

    const dispatch=useDispatch()

    return(
        <div className='cart-item'>
            <div className='part1'>
                <Link to={`/products/${item?.product?.id}`} className='pic'><img src={item?.product?.images[0]} alt='pic'/></Link>
                <div className='quantity-box'>
                    <button type='button' className='qty-btn' onClick={()=>dispatch(addItem(item?.product))}><FontAwesomeIcon icon={faPlus}/></button>
                    <span className='qty'><span>{item?.qty}</span>تعداد</span>
                    <button type='button' className='qty-btn' onClick={()=>dispatch(decreaseItem(item))}>
                        {item.qty>1?<FontAwesomeIcon icon={faMinus}/>:<FontAwesomeIcon icon={faTrashCan}/>}
                    </button>
                </div>
            </div>
            <div className='part2'>
                <Link to={`/products/${item?.product?.id}`} className='item-title'>{item?.product?.title}</Link>
                <div className='d-flex align-items-center product-rate'>
                    <Rating ratingValue={(item?.product?.rating?.rate*100)/5} size={13} readonly={true} />
                    <span className='d-inline-flex text'>({item?.product?.rating?.count} نظر)</span>
                </div>
                <span className='cost'><span className='text'>قیمت هر واحد:</span> {item?.product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>تومان</span></span>
                <span className='cost'><span className='text'>قیمت کل: </span>{(item?.product?.price*item.qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>تومان</span></span>
                <button type='button' className='del-item' onClick={()=>dispatch(removeItem(item?.product))}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                    حذف
                </button>
            </div>
        </div>
    )
}

export default CartItem