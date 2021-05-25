export const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return { products: action.payload };

        default:
            return state
    }
}