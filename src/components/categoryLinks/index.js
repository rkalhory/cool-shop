import MainTitle from "../mainTitle";
import './style.scss'
import {Link} from "react-router-dom";
import {useAllCategories} from "../../customHooks";
import Spinner from "../spinner";

const CategoryLinks=()=> {
    const {data:categories=[],catLoading}=useAllCategories()
    return(
        catLoading ? <Spinner/>:
                <div className='category-links'>
                    <MainTitle title='دسته بندی محصولات'/>
                    <div className='d-flex justify-content-center'>
                        {categories.map((item) => (
                            <div className='cat-item' key={item.id}>
                                <Link to={`/products?type=${item?.id}`}>
                                    <span className='icon'><img src={item.image} alt={item.title}/></span>
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

    )
}

export default CategoryLinks