import './style.scss'

const Spinner=()=> (
        <div className='text-center'>
            <svg className="spinner">
                <circle cx="40" cy="40" r="35"></circle>
                <circle className="small" cx="40" cy="40" r="18"></circle>
            </svg>
        </div>
    )

export default Spinner