export const basketReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case 'ADD_BASKET':
            const isExists = state.items.find(item => item.id.toString() === action.payload.id.toString())
            if (isExists) {
                state.items = state.items.filter(x => x.id.toString() !== isExists.id.toString());
                return {
                    items: [
                        ...state.items,
                        { ...action.payload, count: action.payload.counter += 1 }
                    ]
                }
            }
            else {
                return {
                    items: [
                        ...state.items,
                        { ...action.payload, count: action.payload.counter = 1 }
                    ]
                };
            }
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