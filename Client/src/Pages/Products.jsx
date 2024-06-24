import ProductCard from "../Components/ProductCard";
import '../CSS/products.css'

const Products = () => {
    return(
        <div className="productContainer">
            <ProductCard 
            image={'https://placeholderimage.eu/api/id/1'}
            title={'titre'}
            price={12.2}
            rating={2.1}
            raters={130}
            colors={3}/>

            <ProductCard 
            image={'https://placeholderimage.eu/api/id/1'}
            title={'titre'}
            price={12.2}
            rating={2.1}
            raters={130}
            colors={3}/>

            <ProductCard 
            image={'https://placeholderimage.eu/api/id/1'}
            title={'titre'}
            price={12.2}
            rating={2.1}
            raters={130}
            colors={3}/>
        </div>
    )
}

export default Products