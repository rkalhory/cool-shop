import Breadcrumbs from "../../components/breadcrumb";
import {useSelector} from "react-redux";
import empty from '../../assets/images/empty-cart.svg'
import './style.scss'
import {Link} from "react-router-dom";
import CartItem from "../../components/cartItem";
import {useEffect, useState} from "react";

const p=[
    {title:'صفحه اصلی',link:'/'},
]

const Cart = () =>{
    const {cart}=useSelector(state => state)
    const [total,setTotal]=useState(0)

    useEffect(()=>{
        if(cart.length){
            let temp=0
            cart.forEach(item=>temp=temp+(item?.product?.price*item.qty))
            setTotal(temp)
        }
    },[cart])

    return(
        <>
            <Breadcrumbs current={'سبد خرید'} path={p}/>
            <div className='container pt-80 pb-80'>
                <div className='row'>
                    <div className={`content-col ${!cart.length?'w-100':''}`}>
                        <div className='cart-box'>
                            <h1 className='page-title'>سبد خرید شما</h1>
                            {cart.length?<>
                                <h3 className='cart-count'>{cart.length} کالا</h3>
                                    {cart.map(item=>(
                                        <CartItem key={item.product.id} item={item}/>
                                    ))}
                            </>:
                                <div className='empty-cart'>
                                    <img src={empty} alt={'سبد خرید خالی است'}/>
                                    <h3>سبد خرید شما خالی است!</h3>
                                    <span>می‌توانید برای مشاهده محصولات بیشتر به صفحه زیر بروید:</span>
                                    <Link to={'/products'} className='more-btn'>محصولات</Link>
                                </div>
                            }

                        </div>
                    </div>
                    {cart.length?<div className='checkout-col'>
                        <div className='cart-box'>
                            <div className='text'>قیمت کالاها ({cart.length})<span>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className='currency'>تومان</span></span></div>
                            <div className='text'>مالیات بر ارزش افزوده<span>10,000<span className='currency'>تومان</span></span></div>
                            <p>هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود.</p>
                            <div className='text total'>مجموع سبد خرید<span>{(total+10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className='currency'>تومان</span></span></div>
                            <button type='button' className='checkout-btn'>ادامه خرید</button>
                        </div>
                    </div>:''}
                </div>
            </div>
        </>
    )
}

export default Cart