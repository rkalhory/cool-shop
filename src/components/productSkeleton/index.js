import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductSkeleton = () =>(
    <div className='product-row mb-80'>
        <div className='col-img'>
            <Skeleton height={400}/>
        </div>
        <div className='col-info row-10'>
            <Skeleton width={'10%'} height={25}/>
            <Skeleton width={'40%'} height={30}/>
            <Skeleton width={'20%'} height={25}/>
            <Skeleton width={'20%'} height={25}/>
            <Skeleton width={'100%'} height={150}/>
        </div>
    </div>
)

export default ProductSkeleton