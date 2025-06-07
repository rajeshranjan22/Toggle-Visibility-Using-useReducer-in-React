export const initialState = {
    inVisible: false
}

export function MessageReducer(action, state) {
    switch (action.type) {
        case 'TOGGLE_VISIBILITY':
            return {
                ...state, isVisible: !state.isVisible
            };
        default:
            return state;
    }

}