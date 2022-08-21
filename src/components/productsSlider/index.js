// import {useAllProducts} from '../../customHooks'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import ProductCart from "../productCart";
import Spinner from "../spinner";

const ProductsSlider=({products,isLoading})=> {
    // const {data:products,isLoading}=useAllProducts(10)

    let settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 499,
                settings: {
                    slidesToShow: 1,
                }
            },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
        ],
        autoplay:true,
        autoplaySpeed:4000,
        // rtl:true,
    }
    return(
        <div className='overflow-hidden ltr'>
            <div className='container'>
                {isLoading?<Spinner/>:
                    <Slider {...settings}>
                        {products?.map((product) => (
                                <div key={product?.id}>
                                    <ProductCart product={product} />
                                </div>
                            )
                        )}
                    </Slider>
                }
            </div>
        </div>
    )
}

export default ProductsSlider