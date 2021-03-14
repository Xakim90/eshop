import * as axios from "axios";

let url = "";

if (process.env.MIX_API_URL === "local") {
    url = "http://localhost:8000";
} else {
    url = "https://laravel-react-eshop.herokuapp.com";
}

const instance = axios.create({
    baseURL: `${url}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const setBrands = brand => ({
    type: "ADD_BRANDS_SUCCESS",
    payload: brand
});

export const brandsAPI = {
    createbrand(brand) {
        return async dispatch => {
            let response = await instance.post("brands", brand);
            if (response.data) {
                dispatch(setbrands(response.data));
                window.history.go(-1);
            }
        };
    },

    getBrands() {
        return async dispatch => {
            let response = await instance.get("brands", {
                onDownloadProgress: function(event) {
                    let progress = Math.round(
                        (event.loaded * 100) / event.total
                    );
                }
            });
            if (response.data) {
                dispatch(setBrands(response.data));
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
            }
        };
    },

    updateBrand(brand) {
        return async dispatch => {
            let response = await instance.put("brands", {
                params: brand
            });
            if (response.status === 200) {
                dispatch(this.getBrands());
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
                // myData.clientError(response.data);
            }
        };
    },

    deleteBrand(brandId) {
        return async dispatch => {
            let response = await instance.delete(`brands/${brandId}`);
            if (response.status === 200) {
                dispatch(this.getBrands());
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
                // myData.clientError(response.data);
            }
        };
    }
};

// axios.get(
//     "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate",
//     {
//         onDownloadProgress: progressEvent => {
//             let percentCompleted = Math.round(
//                 (progressEvent.loaded * 100) / progressEvent.total
//             );
//             console.log(progressEvent.lengthComputable);
//             console.log(percentCompleted);
//         }
//     }
// );
