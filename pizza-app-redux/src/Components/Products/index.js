import React, { useEffect } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productActions';

function Products() {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products)

    useEffect(() => {
        getProducts()(dispatch);
    }, [dispatch])

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
