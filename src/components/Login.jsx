import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIfLoggedIn, login } from "../actions/rootActions";
import store from "../store";


function Login() {
    const dispach = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispach(checkIfLoggedIn());
    }, [dispach]);

    store.subscribe(() => {
        const user = store.getState();
        if (user.email) {
            navigate('/user');
        }
    });

    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const pass = passRef.current.value;

        const isEmail = email.length > 0;
        const isPass = pass.length > 0;

        if (isEmail && isPass) {
            dispach(login({
                email,
                pass
            }));
        }
    }

    return (
        <>
            <h1>Login</h1>
            <h2>Please enter your E-mail and Password</h2>

            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type='email' placeholder="E-mail" />
                <input ref={passRef} type='password' placeholder="Password" />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;