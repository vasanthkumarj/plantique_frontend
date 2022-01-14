import React, { useState } from "react";
import { login } from "../../services/services";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    let response = login(username, password)
    if (response == "Failure")
      Notify.failure('Sol lucet omnibus');
    else
      Notify.success('Sol lucet omnibus');
  }

  return (
    <div className="container">
        <Card className="login-card">
          <span className="logo"><i class="fab fa-canadian-maple-leaf fa-4x"></i></span>
          <Divider align="center">
            <span>Plantique Login</span>
          </Divider>
          <div className="login">
            <span className="p-input-icon-left input-box">
              <i className="fa fa-user" />
              <InputText placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </span>
            <br />
            <span className="p-input-icon-left input-box">
              <i className="fa fa-unlock-alt" />
              <InputText type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </span>
            <Button icon="fa fa-leaf" className="p-button-success" onClick={() => onSubmit()}>Login</Button>
          <p>New user? <br/> <a href="">Create plantique account Today!</a></p>
          </div>
        </Card>
    </div>
  );
}

export default Login;