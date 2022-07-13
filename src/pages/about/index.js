import Breadcrumbs from "../../components/breadcrumb";

const path=[
    {title:'صفحه اصلی',link:'/'}
    ]

const About=()=> (
        <>
            <Breadcrumbs current={'درباره ما'} path={path}/>

        </>
    )


export  default About