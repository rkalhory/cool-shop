import {useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useCategoryProducts, useProduct} from "../../customHooks";
import ProductSkeleton from "../../components/productSkeleton";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import './style.scss'
import Breadcrumbs from "../../components/breadcrumb";
import getCategoryInfo from "../../utils/getCategoryInfo";
import {Rating} from "react-simple-star-rating";
import {faShoppingCart,faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as heartR} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MainTitle from "../../components/mainTitle";
import ProductsSlider from "../../components/productsSlider";
import {addCart} from '../../utils/addProduct'


const p=[
    {title:'صفحه اصلی',link:'/'},
    {title:'محصولات',link:'/products'}
]

const ProductDetails=()=> {

    const { id } = useParams();
    const {data:product={},isLoading}=useProduct(id)
    const categoryInfo=getCategoryInfo(product?.category)

    const {data:similarProducts=[],loadingSlider}=useCategoryProducts(product?.category)

    const [isWish,setIsWish]=useState(false)

    console.log('product:',product)
    console.log('categoryInfo:',categoryInfo)
    console.log('similarProducts:',similarProducts)

    return (
        <>
            <Breadcrumbs current={product?.title} path={p}/>
            <div className='product-detail'>
                <div className='container ltr'>
                    {isLoading?<ProductSkeleton/>:
                        <div className='product-row mb-80'>
                            <div className='col-img'>
                                <div className='zoom-image-box'>
                                    <InnerImageZoom src={product?.image} zoomType={'hover'} />
                                </div>
                            </div>
                            <div className='col-info row-10'>
                                <Link to={`/products?type=${categoryInfo?.value}`} className='cat-tag'>{categoryInfo?.label}</Link>
                                <h1 className='title'>{product?.title}</h1>
                                <div className='d-flex product-detail-rate'>
                                    <Rating ratingValue={(product?.rating?.rate*100)/5} size={15} readonly={true} />
                                    <span className='d-inline-flex text'>({product?.rating?.count} Reviews)</span>
                                </div>
                                <span className='cost'>{product?.price}$</span>
                                <p>{product?.description}</p>
                                <div className='product-detail-action'>
                                    <button type='button' className='add-cart' onClick={()=>addCart(product)}><FontAwesomeIcon icon={faShoppingCart} /> افزودن به سبد خرید</button>
                                    <button type='button' className={`add-wish ${isWish?'active':''}`} onClick={()=>setIsWish(s=>!s)}><FontAwesomeIcon icon={isWish?faHeart:heartR} /></button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <section className='pt-80 pb-80'>
                <MainTitle title='محصولات مشابه'/>
                <ProductsSlider products={similarProducts.slice(0, 6)} isLoading={loadingSlider}/>
            </section>
        </>
    )
}

export default ProductDetails