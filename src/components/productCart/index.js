import { Rating } from 'react-simple-star-rating'
import './style.scss'
import {Link} from "react-router-dom";

const ProductCart=({product}) => (
        <div className='product-cart'>
            <Link to={`/products/${product?.id}`}><img src={product?.image} alt={product?.title}/></Link>
            <div className='content'>
                {/*<Link to={`/products/${product?.id}`} className='title'>{product?.title.substring(0,20)}</Link>*/}
                <Link to={`/products/${product?.id}`} className='title'>{product?.title}</Link>
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <Rating ratingValue={(product?.rating?.rate*100)/5} size={15} readonly={true} />
                    <span className='cost'>{product?.price}$</span>
                </div>
                <button type='button' className='cart-btn'>افزودن به سبد خرید</button>
            </div>
        </div>
    )


export default ProductCart