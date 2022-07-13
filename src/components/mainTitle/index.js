import {memo} from 'react'
import './style.scss'

const MainTitle=({title})=> (
    <div className='main-title'>
        <h2>{title}</h2>
    </div>
)


export default memo(MainTitle)