import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const useSecureAxios = () => {

    //  interceptor here


    return axiosSecure;
}

export default useSecureAxios