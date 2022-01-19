import React, {useState} from "react"
import { InputText } from 'primereact/inputtext';
import { HomePageService } from "./../../services";
import { Button } from 'primereact/button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [userType, setUsertype] = useState("");
    const [gender, setGender] = useState("");

    const onSubmit = async() => {
        let response = await HomePageService.register(
            {
                "userId":userId,
                "fname":fname, 
                "lname":lname,
                "email":email,
                "password":password,
                "address":{
                    "city":city,
                    "pincode":pincode
                },
                "phone":phone,
                "dob":dob,
                "userType":userType,
                "gender":gender
            })
        console.log(response["data"])
        if (response['data'] == "Failure")
          Notify.failure('Register unsuccessful');
        else
        {
          Notify.success('Register successful');
          navigate("/login")
        }
          
      }

    return(
    <>
       <InputText placeholder="User Id" value={userId} onChange={(e) => setUserId(e.target.value)} />
       <InputText placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
       <InputText placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
       <InputText placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
       <InputText placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
       <InputText placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
       <InputText placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
       <InputText placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
       <InputText placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
       <InputText placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
       <InputText placeholder="User Type" value={userType} onChange={(e) => setUsertype(e.target.value)} />
       <InputText placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
       <Button icon="fa fa-leaf" className="p-button-success" onClick={() => onSubmit()}>Register</Button>
   </>
    );
}


export default  Signup;