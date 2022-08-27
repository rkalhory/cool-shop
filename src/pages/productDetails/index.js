import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useAllProducts, useProduct} from "../../customHooks";
import ProductSkeleton from "../../components/productSkeleton";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import './style.scss'
import Breadcrumbs from "../../components/breadcrumb";
import {Rating} from "react-simple-star-rating";
import {faShoppingCart,faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as heartR} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MainTitle from "../../components/mainTitle";
import ProductsSlider from "../../components/productsSlider";
import {addItem, addWish, removeWish} from "../../redux/action";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";


const p=[
    {title:'صفحه اصلی',link:'/'},
    {title:'محصولات',link:'/products'}
]

const ProductDetails=()=> {

    const dispatch=useDispatch()

    const { id } = useParams();
    const {data:product={},productLoading}=useProduct(id)
    const {data:products={},isLoading}=useAllProducts()

    const wishList=useSelector(s=>s.wishList)

    const [mainPic,setMainPic]=useState('')
    const [isWish,setIsWish]=useState(false)
    const [loadingSlider,setLoadingSlider]=useState(true)
    const [similarProducts,setSimilarProducts]=useState([])

    useEffect(()=>{
        if(products.length&&Object.keys(product).length){
            let filter=products.filter(p=>p?.category?.id===product?.category?.id&&p.id!==product?.id)
            setSimilarProducts(filter)
            setLoadingSlider(false)
            setMainPic(product?.images[0])
        }
    },[products,product])

    function addToCart() {
        dispatch(addItem(product))
        toast.success('به سبد خرید اضافه شد!')
    }

    useEffect(()=>{
        if(wishList.length){
            const exist=wishList.find((x)=>x.id===product.id)
            setIsWish(exist)
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
        <>
            <Breadcrumbs current={product?.title} path={p}/>
            <div className='product-detail'>
                <div className='container'>
                    {isLoading?<ProductSkeleton/>:
                        <div className='product-row mb-80'>
                            <div className='col-img'>
                                <div className='zoom-image-box'>
                                    <InnerImageZoom src={mainPic} zoomType={'hover'} />
                                </div>
                                <div className='d-flex slider-pics'>
                                    {product?.images?.map((p,index)=>(
                                        <div key={index} onClick={()=>setMainPic(p)} className='pic'>
                                            <img src={p} alt={`pic${index}`}/>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className='col-info row-10'>
                                <Link to={`/products?type=${product?.category?.id}`} className='cat-tag'>{product?.category?.title}</Link>
                                <h1 className='title'>{product?.title}</h1>
                                <div className='d-flex product-detail-rate'>
                                    <Rating ratingValue={(product?.rating?.rate*100)/5} size={15} readonly={true} />
                                    <span className='d-inline-flex text'>({product?.rating?.count} نظر)</span>
                                </div>
                                <span className='cost'>{product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>تومان</span></span>
                                <p>{product?.description}</p>
                                <div className='product-detail-action'>
                                    <button type='button' className='add-cart' onClick={()=>addToCart()}><FontAwesomeIcon icon={faShoppingCart} /> افزودن به سبد خرید</button>
                                    <button type='button' className={`add-wish ${isWish?'active':''}`} onClick={handleWishList}><FontAwesomeIcon icon={isWish?faHeart:heartR} /></button>
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