import React, { useState } from "react";
import { login } from "../../services/services";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <center>
        <Card className="login-card">
          <div className="login">
          <span className="p-input-icon-left">
              <i className="fa fa-user" />
              <InputText className="p-inputtext p-component" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </span>
            <span className="p-input-icon-left">
            <Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </span>
            <Button className="p-button-success" onClick={() => login(username, password)}>Success</Button>
          </div>
        </Card>
      </center>
    </>
  );
}

export default Login;