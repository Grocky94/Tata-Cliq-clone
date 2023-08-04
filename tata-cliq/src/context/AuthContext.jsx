import React from "react";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const initialValue = { user: null };

function reducer(state,action) {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                user: null
            }
        default:
            return state;
    }

}
const AuthContextProvider = ({ children })=> {
    const [state, dispatch] = useReducer(reducer,initialValue)

    const userData = JSON.parse(localStorage.getItem("Current-User"))
    function Login(userData) {
        dispatch({
            type: "LOGIN",
            payload: userData
        })
    }
    const Logout = () => {
        localStorage.removeItem("Current-User");
        dispatch({
            type: "LOGOUT",
        })
    }
    useEffect(() => { 
        const current = JSON.parse(localStorage.getItem("Current-User"));
        if (current) {
            dispatch({
                type: "LOGIN",
                payload: userData,
            })
        }
    }, [])
    return (
        <div>
            <AuthContext.Provider value={{state, Login, Logout}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthContextProvider;
