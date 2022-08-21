import MainSlider from "../../components/mainSlider";
import CategoryLinks from "../../components/categoryLinks";
import ProductsSlider from "../../components/productsSlider";
import ProductsFilter from "../../components/productsFilter";
import MainTitle from "../../components/mainTitle";
// import Support from "../../components/support";
import {useAllProducts} from "../../customHooks";

const Home=()=> {
    const {data:products,isLoading}=useAllProducts(10)

    console.log('products:',products)
    return (
        <>
            <MainSlider/>
            <CategoryLinks/>
            <section className='pt-80 pb-80 bg-grey'>
                <MainTitle title='جدیدترین محصولات'/>
                <ProductsSlider products={products} isLoading={isLoading}/>
            </section>
            <section className='pt-80 pb-80'>
                <div className='container'>
                    <ProductsFilter/>
                </div>
            </section>
            {/*<Support/>*/}
        </>
    )
}


export  default Home