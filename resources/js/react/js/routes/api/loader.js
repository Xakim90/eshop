import axios from "axios";

export const watchRequests = ({ setloading, seterrorText, setopen }) => {
    axios.interceptors.request.use(
        config => {
            console.log("watchRequests");
            setloading(true);
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        response => {
            console.log("watchRequests2");
            switch (response.status) {
                case 200:
                case 204:
                case 201:
                    setloading(false);
                    break;
                default:
                    break;
            }
            return response;
        },
        error => {
            setloading(false);
            setopen(true);
            seterrorText(error?.response?.data.message);
            setTimeout(() => {
                setopen(false);
            }, 4000);
            if (error?.response && error?.response?.data) {
                return Promise.reject(error.response.data);
            }
            return Promise.reject(error?.message);
        }
    );
};
