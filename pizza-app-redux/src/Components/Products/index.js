import React, { useEffect } from 'react';
import Product from './Product';
import { useDispatch, useStore } from 'react-redux';
import { getProducts } from '../../redux/productActions';

function Products() {
    const dispatch = useDispatch();
    const { getState } = useStore();
    const { products } = getState();

    useEffect(() => {
        getProducts()(dispatch);
    }, [dispatch, products])

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
