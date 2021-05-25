export const basketReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case 'ADD_BASKET':
            return {
                items: [
                    ...state.items,
                    { ...action.payload, counter: action.payload.counter += 1 }
                ]
            };
        case 'REMOVE_FROM_BASKET':
            return {
                items: [
                    ...state.items.filter(item => action.payload.id !== item.id)
                ]
            };
        default:
            return state
    }
}