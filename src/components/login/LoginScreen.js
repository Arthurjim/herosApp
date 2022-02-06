import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import useForm from "../customHooks/useForm";
const LoginScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [inputValue,handleInput] = useForm({'username':''})
    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: inputValue.username,
            },
        };
        dispatch(action);
        const path = localStorage.getItem('lastPath') || '/';
        navigate(path, { replace: true });
    };
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            <div className="my-2">
                <input type="text" placeholder="Username" onChange={handleInput} name="username" />
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
