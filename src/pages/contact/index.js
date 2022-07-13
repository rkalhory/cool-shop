import Breadcrumbs from "../../components/breadcrumb";

const path=[
    {title:'صفحه اصلی',link:'/'}
]

const Contact = () => (
        <>
            <Breadcrumbs current={'تماس با ما'} path={path}/>
            Contact
        </>
    )


export  default Contact