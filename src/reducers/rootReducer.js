function rootReducer(state, action) {

    switch (action.type) {
        case 'test':
            console.log(action.payload);
            break;

        default:
            console.log({
                error: 'action type not found',
                type: action.type
            });
    }

    return state;
}

export default rootReducer;