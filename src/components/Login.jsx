import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIfLoggedIn, login } from "../actions/rootActions";
import inputValidation from "../functions/inputsValidation";

function Login() {
    const dispach = useDispatch();

    useEffect(() => {
        dispach(checkIfLoggedIn());
    }, [dispach]);

    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user && user.email) {
            navigate('/user');
        }
    }, [user, navigate])

    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        const email = inputValidation(emailRef.current.value, 'email');
        const pass = inputValidation(passRef.current.value, 'password');

        const isEmail = !email.error;
        const isPass = !pass.error;

        if (isEmail && isPass) {
            dispach(login({
                email: email.value,
                pass: pass.value
            }));
        }
    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <h2>Please enter your E-mail and Password</h2>

            <label className='input-container email'>
                <input ref={emailRef} type='email' placeholder="E-mail" />
            </label>

            <label className='input-container password'>
                <input ref={passRef} type='password' placeholder="Password" />
            </label>

            <button>Login</button>
        </form>
    )
}

export default Login;