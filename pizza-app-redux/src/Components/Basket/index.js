import React, { useState } from 'react';
import { useStore } from 'react-redux';
import BasketItem from './BasketItem';


function Basket() {


    const { getState, subscribe } = useStore();

    const { basket } = getState();

    const [state, setstate] = useState(basket)



    subscribe(() => {
        setstate(getState().basket);
    })

    return (
        <div className="cart" id="cart">
            <div className="basket-icon">
                <button><i className="fas fa-shopping-bag"></i></button>
            </div>
            <div className="cart-content" id="cart-content">
                {state.map(item =>
                    <BasketItem product={item} key={Math.random()} />
                )}
                {state.length>1 ? <span>no items</span>:""}
            </div>
        </div>
    )
}

export default Basket
