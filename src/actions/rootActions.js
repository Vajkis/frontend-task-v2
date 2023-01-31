import { CHECK_IF_LOGGED_IN, LOGIN, LOGOUT } from "../actionsTypes/rootActionsTypes";

export function checkIfLoggedIn() {
    return {
        type: CHECK_IF_LOGGED_IN
    };
}

export function login(data) {
    return {
        type: LOGIN,
        payload: data
    };
}

export function logout() {
    return {
        type: LOGOUT,
    };
}