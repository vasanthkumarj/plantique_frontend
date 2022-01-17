import axios from 'axios';
import React, { useState } from "react";


const client = (() => {
    return axios.create({
        baseURL: "http://192.168.1.8:5000/"
    })
})();

const request = async (options) => {
    const onSuccess = (response) => {
        const {
            data: { message }
        } = response;
        return message;
    }

    const onError = (error) => {
        return Promise.reject(error.response);
    }

    return client(options).then(onSuccess).catch(onError);
}

export default request;
export { client };
