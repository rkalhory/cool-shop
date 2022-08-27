import Breadcrumbs from "../../components/breadcrumb";
import {useSelector} from "react-redux";
import empty from '../../assets/images/empty-wishlist.png'
import './style.scss'
import {Link} from "react-router-dom";
import WishItem from "../../components/wishItem";

const p=[
    {title:'صفحه اصلی',link:'/'},
]

const Wish = () =>{

    const {wishList}=useSelector(state => state)


    return(
        <>
            <Breadcrumbs current={'علاقمندی ها'} path={p}/>
            <div className='container pt-80 pb-80'>
                <div className='row'>
                    <div className='full-col'>
                        <h1 className='page-title'>علاقمندی ها</h1>
                    </div>
                </div>
                <div className='row row-20'>

                    {wishList.length?<>
                            {wishList.map(item=>(
                                <div className='wish-col' key={item.id}>
                                    <WishItem product={item} />
                                </div>
                            ))}
                        </>:
                        <div className='empty-cart'>
                            <img src={empty} alt={'لیست علاقمندی ها'}/>
                            <h3>هنوز هیچ محصولی را اضافه نکرده اید!</h3>
                            <span>می‌توانید برای مشاهده محصولات بیشتر به صفحه زیر بروید:</span>
                            <Link to={'/products'} className='more-btn'>محصولات</Link>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Wish