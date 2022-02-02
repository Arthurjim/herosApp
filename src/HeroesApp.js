import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './routes/AppRouter'

const initialState =()=>{
    return JSON.parse(localStorage.getItem('user'))|| {logged:false}
}

const HeroesApp = () => {
    const [user,dispatch] = useReducer(authReducer,{}, initialState);
    useEffect(()=>{
        if(!user) return;

        localStorage.setItem('user',JSON.stringify(user))
    },[user])

    return (
        <AuthContext.Provider value={{
            user,dispatch
        }} >
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default HeroesApp
