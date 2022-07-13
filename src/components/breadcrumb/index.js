import './style.scss'
import {Link} from "react-router-dom";

const Breadcrumbs=({current,path})=> (
        <div className='breadcrumb'>
            <div className='container'>
                {path?.map((p,index)=>(
                    <div className='d-inline-flex align-items-center' key={index}><Link to={p.link}>{p.title}</Link>/</div>
                ))}
                <span>{current}</span>
            </div>
        </div>
    )

export default Breadcrumbs