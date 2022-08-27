import Breadcrumbs from "../../components/breadcrumb";

const path=[
    {title:'صفحه اصلی',link:'/'}
    ]

const About=()=> (
        <>
            <Breadcrumbs current={'درباره ما'} path={path}/>
            <div className='container'>
                <h1 className='page-title'>درباره ما</h1>
            </div>
        </>
    )


export  default About