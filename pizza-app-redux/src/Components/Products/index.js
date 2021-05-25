import React from 'react';
import Product from './Product';
import { useStore } from 'react-redux';


function Products() {

    const { getState } = useStore();

    const { products } = getState();

    return (
        <div className="row" id="pizzas">
            <div className="col-12">
                <h2 className="f-700 text-center">Popular dishes</h2>
            </div>
            {products.map((prod, key) =>
                <Product product={prod} key={key} />
            )}
        </div>
    )
}

export default Products
