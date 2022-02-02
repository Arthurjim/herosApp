import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
const LoginScreen = () => {
    const { dispatch } = useContext(AuthContext);
   
    
    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: "Arturo",
            },
        };
        dispatch(action);
      
    };
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
