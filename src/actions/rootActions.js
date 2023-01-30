import { CHECK_IF_LOGGED_IN, LOGIN } from "../actionsTypes/rootActionsTypes";

export function checkIfLoggedIn() {
    return {
        type: CHECK_IF_LOGGED_IN
    }
}

export function login(data) {
    return {
        type: LOGIN,
        payload: data
    };
}
