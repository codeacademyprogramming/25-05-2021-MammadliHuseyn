import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BasketItem from './BasketItem';


function Basket() {

    const { items } = useSelector(state => state.basketReducer);

    return (
        <div className="cart" id="cart">
            <div className="basket-icon">
                <button><i className="fas fa-shopping-bag"></i></button>
            </div>
            <div className="cart-content" id="cart-content">
                {items.map(item =>
                    <BasketItem product={item} key={Math.random()} />
                )}
                {items.length < 1 ? <span>No items</span> : ""}
            </div>
        </div>
    )
}

export default Basket
