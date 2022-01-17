import React, { useState } from "react";
import { HomePageService } from "./../../services";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  Notify.init({
    position: "center-top",
    clickToClose: true,
    pauseOnHover: true
  })

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async() => {
    let response = await HomePageService.login({"username":username, "password":password})
    console.log(response["data"])
    if (response['data'] == "Failure")
      Notify.failure('Login unsuccessful');
    else
    {
      Notify.success('Login successful');
      navigate("/home")
    }
      
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