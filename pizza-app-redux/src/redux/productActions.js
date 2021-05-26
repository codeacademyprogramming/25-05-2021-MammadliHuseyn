import axios from 'axios';

function getProducts() {
    return (dispatch) => {
        return axios.get('https://private-anon-2134ad2155-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank')
            .then(
                ({ data }) => dispatch({ type: "GET_PRODUCTS", payload: data })
            );
    };
}

export {
    getProducts
}