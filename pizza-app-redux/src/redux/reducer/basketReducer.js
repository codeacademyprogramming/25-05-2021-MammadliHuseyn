export const basketReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case 'ADD_BASKET':
            return {
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        default:
            return state
    }
}