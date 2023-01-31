import { CHECK_IF_LOGGED_IN, LOGIN, LOGOUT } from "../actionsTypes/rootActionsTypes";
import users from '../data/users.json';

function rootReducer(state, action) {

    let newState = state ? { ...state } : { user: { email: '' } };

    switch (action.type) {
        case CHECK_IF_LOGGED_IN:
            const user = JSON.parse(localStorage.getItem('user'));

            if (user) newState.user = user;
            else newState.user = { email: '' };

            break;

        case LOGIN:
            const foundUser = users.filter(u => u.email === action.payload.email)[0];
            if (foundUser) {
                if (foundUser.password === action.payload.pass) {
                    newState.user = { email: action.payload.email };
                    localStorage.setItem('user', JSON.stringify(newState.user));
                }
            }
            break;

        case LOGOUT:
            newState.user = { email: '' };
            localStorage.removeItem('user');
            break;

        default:
    }

    return newState;
}

export default rootReducer;