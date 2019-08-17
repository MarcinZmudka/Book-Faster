import React, { useContext, } from "react";
import { UserAuthContext } from "../../content/UserAuthContext";
import { FirebaseContext } from "./../../content/FirebaseContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const SignOut = () => {
    const [ , setUserAuth ] = useContext(UserAuthContext);
    const firebase = useContext(FirebaseContext);
    const onClick = () => {
        firebase.signOut()
        .then(() =>{
            setUserAuth(false);
        });
    }
    return (
            <Link to="/"><Button variant="outline-secondary" onClick={onClick} >Wyloguj się</Button></Link>        
    )
}

export default SignOut;