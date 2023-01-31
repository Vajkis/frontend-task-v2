import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIfLoggedIn, logout } from "../actions/rootActions";

function User() {
    const dispach = useDispatch();

    useEffect(() => {
        dispach(checkIfLoggedIn());
    }, [dispach]);

    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user && !user.email) {
            navigate('/');
        }
    }, [user, navigate])

    const handleLogout = () => {
        dispach(logout());
    }

    return (
        <>
            <h1>Congrats you made it!</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default User;