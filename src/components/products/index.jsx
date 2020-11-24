import React from 'react';
import ProductList from './ProductList';
import { useSelector } from 'react-redux'

// const products = [
//    {
//        id: 1,
//        name: "tachyons",
//        img: "https://picsum.photos/seed/picsum/200/300",
//        price: 100,
//        available: 1
//    },
//    {
//        id: 2,
//        name: "Grayscale",
//        img: "https://picsum.photos/200/300?grayscale",
//        price: 30,
//        available: 1
//    },
//    {
//        id: 3,
//        name: "Blur",
//        img: "https://picsum.photos/200/300/?blur",
//        price: 50,
//        available: 0
//    },
//    {
//        id: 4,
//        name: "Blur - 2",
//        img: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
//        price: 70,
//        available: 1
//    }
// ]

const Products = () => {
    const products = useSelector((state) => state.product.allProducts)
    return <div className="container"> 
            <div className="row"> 
            {products.map(p => (
                 <div className="col-md-3" key={p.id}> 
                    <ProductList {...p} />
                 </div>
            ))}
           </div>
           </div>;
}

export default Products;