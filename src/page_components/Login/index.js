import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { login } from "../../services/services";
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <div className="green-body">
      <FloatingLabel controlId="floatingInput" label="Username">
        <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </FloatingLabel>
      <Button variant="success" onClick={() => login(username, password)}>Success</Button>
      </div>
    </>
  );
}

export default Login;