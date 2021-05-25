import React from 'react';
import dumbPizzaImg from '../../assets/img/pizza (1).png';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/basketActions';

function Product({ product }) {

    const dispatch = useDispatch();

    const addItemToBasket = (product) => {
        dispatch(addToBasket(product))
    }

    return (
        <div className="col-3">
            <div className="pizza-card my-3">
                <div className="card-image w-100">
                    <img src={dumbPizzaImg} alt=" pizza" className="ms-4 w-100" /></div>
                <div className="card-body">
                    <span className="f-600">{product.name}</span>
                    <span className="float-end my-2">32cm</span>
                    <p className="my-2">{product.topping ? product.topping : "N/A"}</p>
                    <p className="text-center mt-3 f-300 price">{product.price} AZN</p>
                </div>
                <div className="card-add" onClick={() => addItemToBasket(product)}>
                    <div className="wrapper">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
