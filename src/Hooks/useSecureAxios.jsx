import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import auth from "../ConfigFiles/firebase.config";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const useSecureAxios = () => {
    //  interceptor here
    useEffect(() => {
        axiosSecure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            console.log(`error tracked inside the interceptor`, error.response)
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                // console.log('logout the user')
                signOut(auth)
                    .then(() => {
                        console.log('logout the user and navigate to login page')
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    })
            }
        });
    }, [])

    return axiosSecure;
}

export default useSecureAxios