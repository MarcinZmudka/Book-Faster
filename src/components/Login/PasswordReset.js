import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../content/FirebaseContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const ResetPassword = () => {
    const firebase = useContext(FirebaseContext);
    const [ error, setError] = useState("");
    const [ email, setEmail] = useState("");
    const onSubmit = event => {
        event.preventDefault();
        firebase.passwordReset(email).then(()=>{
            setError("Na podany email został wysłany email do zresetowania hasło");
        }
        ).catch(err => {
            setError("Nie rozpoznano adresu email");
        })
    }
    const updateEmail = event => {
        const value = event.target.value;
        setEmail(value);
    }
    return (
        <div className = "login_background">
        <p className="title">get Booked faster</p>
        <p className="login_title">Zresetuj hasło</p>
        <p className="error_login">{error ? error : ""}</p>
        <Form onSubmit={onSubmit} className="login_form">
          <Form.Group className="login_group">
            <Form.Label className="label">Adres Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Wprowadź email"
              id="email"
              onChange={updateEmail}
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Zresetuj hasło
          </Button>
        </Form>
      </div>
    )
}
export default ResetPassword;