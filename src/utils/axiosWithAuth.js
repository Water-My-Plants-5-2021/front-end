import axios from "axios";

const axiosWithAuth = () => {
    return axios.create({
        baseURL: "https://watermyplants-bw.herokuapp.com",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
};

export default axiosWithAuth;
