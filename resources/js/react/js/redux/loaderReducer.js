const initialState = {
     loading: false
};

export default function loaderReducer(state = initialState, action) {
    switch (action.type) {
        case "LOADING_TRUE":
            return {
                ...state,
                loading: true
            };
        //     break;
        // case "LOADING_FALSE":
        //     return {
        //         ...state,
        //         loading: false
        //     };
        //     break;
        default:
            return state;
    }
}
