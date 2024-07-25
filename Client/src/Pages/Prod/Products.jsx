import ProductCard from "../../Components/ProductCard";
import '../../CSS/products.css'
import {useEffect, useState} from 'react'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
       fetch('http://localhost:8000/products')
       .then(response => response.json())
       .then(data => setProducts(data))
       .catch(error => console.log(error)) 
    },[])

    return(
        <div className="productContainer">

            {products.map(product => (
                <ProductCard 
                 key={product._id}
                 image='../../../../Server/Images/Mentalita1_SansFond.png'
                 title={product.title}
                 price={product.price}
                 rating={product.rating}
                 raters={product.raters}
                 />
            ) )}

            <ProductCard 
            image={'https://placeholderimage.eu/api/id/1'}
            title={'titre'}
            price={12.2}
            rating={2.1}
            raters={130}
            />

            <ProductCard 
            image={'https://placeholderimage.eu/api/id/1'}
            title={'titre'}
            price={12.2}
            rating={2.1}
            raters={130}
            />

            <ProductCard 
            image={'https://placeholderimage.eu/api/id/1'}
            title={'titre'}
            price={12.2}
            rating={2.1}
            raters={130}
            />
        </div>
    )
}

export default Products