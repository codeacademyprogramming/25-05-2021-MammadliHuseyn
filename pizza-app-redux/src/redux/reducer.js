// import products from '../data/products.json';

const InitialState = {
    products: [],
    basket: []
}

function reducer(state = InitialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: [
                    ...state.products,
                    ...action.payload
                ]
            };
        case 'ADD_BASKET':
            return {
                ...state,
                basket: [
                    ...state.basket,
                    {
                        product: action.payload
                    }
                ]
            };
        default:
            return state;
    }
}

export default reducer;