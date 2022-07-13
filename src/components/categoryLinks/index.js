import MainTitle from "../mainTitle";
import {category} from '../../utils/values'
import './style.scss'
import {Link} from "react-router-dom";

const CategoryLinks=()=> (
        <div className='category-links'>
            <MainTitle title='دسته بندی محصولات'/>
            <div className='d-flex justify-content-center'>
                {category.map((item,index)=>(
                    <div className='cat-item' key={index}>
                        <Link to={item.link}>
                            <span className='icon'><img src={item.icon} alt={item.title} /></span>
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )


export default CategoryLinks