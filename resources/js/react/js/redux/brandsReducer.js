const initialState = {
    brands: [],
    loaded: false
};

export default function brandsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_BRANDS_SUCCESS":
            return {
                ...state,
                brands: action.payload,
                loaded: true
            };
        default:
            return state;
    }
}
