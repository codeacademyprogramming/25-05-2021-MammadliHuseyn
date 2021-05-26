function addToBasket(payload) {
    return { type: 'ADD_BASKET', payload: payload }
}

function removeFromBasket(payload) {
    return { type: 'REMOVE_FROM_BASKET', payload: payload }
}

export {
    addToBasket,
    removeFromBasket
}