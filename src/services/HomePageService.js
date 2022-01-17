import { client } from "./request";

export default {

    login: (data) => {
        let response = client.post("/login", data);
        return response;
    }

}