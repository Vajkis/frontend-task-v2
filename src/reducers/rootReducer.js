import { CHECK_IF_LOGGED_IN, LOGIN } from "../actionsTypes/rootActionsTypes";
import users from '../data/users.json';

function rootReducer(_, action) {

    let newState = { email: '' };

    switch (action.type) {
        case CHECK_IF_LOGGED_IN:
            const user = JSON.parse(localStorage.getItem('user'));

            if (user) newState = user;
            break;

        case LOGIN:
            const foundUser = users.filter(u => u.email === action.payload.email)[0];

            if (foundUser.password === action.payload.pass) {
                newState = { email: action.payload.email };
                localStorage.setItem('user', JSON.stringify(newState));
            }

            break;

        default:
    }

    return newState;
}

export default rootReducer;