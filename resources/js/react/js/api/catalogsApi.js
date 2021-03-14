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

const setCatalogs = catalog => ({
    type: "ADD_CATALOGS_SUCCESS",
    payload: catalog
});

export const catalogsAPI = {
    createCatalog(catalog) {
        return async dispatch => {
            let response = await instance.post("catalogs", catalog);
            if (response.data) {
                dispatch(this.getCatalogs());
                document.getElementById("requestSuccessInfo").innerText =
                    "Каталог успешно создан!";
            }else{
                document.getElementById("requestErrorInfo").innerText =
                    "Произошла ошибка!";
            }
        };
    },

    getCatalogs() {
        return async dispatch => {
            let response = await instance.get("catalogs", {
                onDownloadProgress: function(event) {
                    let progress = Math.round(
                        (event.loaded * 100) / event.total
                    );
                }
            });
            if (response.data) {
                dispatch(setCatalogs(response.data));
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
            }
        };
    },

    updateCatalog(catalog) {
        return async dispatch => {
            let response = await instance.put("catalogs", {
                params: catalog
            });
            if (response.status === 200) {
                dispatch(this.getCatalogs());
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
                // myData.clientError(response.data);
            }
        };
    },

    deleteCatalog(catalogId) {
        return async dispatch => {
            let response = await instance.delete(`catalogs/${catalogId}`);
            if (response.status === 200) {
                dispatch(this.getCatalogs());
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
