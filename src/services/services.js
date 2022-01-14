import axios from 'axios';

const baseURL = "http://192.168.1.5:5000/";

export const login = (username, password) => {
    var status = "";
    axios.post(baseURL + "login", {
        "username": username,
        "password": password
    })
        .then(res => {
            console.log(res);
            console.log(res.data);
            status = res.data;
        })
    console.log(status)
    return status
}