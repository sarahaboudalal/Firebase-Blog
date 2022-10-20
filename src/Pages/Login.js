import React from "react"
import { auth, provider } from "../firebase-config"
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export default function Login({setIsAuth}){

    let navigate = useNavigate()

    function signInWithGoogle(){
        signInWithPopup(auth, provider)
        .then((result)=>{
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate('/')
        })
    }

    return(
        <div className="loginPage">
        <p>Sign In With Google To Continue</p>
        <button 
        className="login-with-google-btn"
        onClick={signInWithGoogle}>
        Sign in with Google
        </button>
        </div>
    )
}