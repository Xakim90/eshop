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

const setCategories = category => ({
    type: "ADD_CATEGORIES_SUCCESS",
    payload: category
});

export const categoriesAPI = {
    createCategory(category) {
        return async dispatch => {
            let response = await instance.post("categories", category);
            if (response.data) {
                dispatch(setCategories(response.data));
                window.history.go(-1);
            }
        };
    },

    getCategories() {
        return async dispatch => {
            let response = await instance.get("categories", {
                onDownloadProgress: function(event) {
                    let progress = Math.round(
                        (event.loaded * 100) / event.total
                    );
                }
            });
            if (response.data) {
                dispatch(setCategories(response.data));
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
            }
        };
    },

    updateCategory(category) {
        return async dispatch => {
            let response = await instance.put("categories", {
                params: category
            });
            if (response.status === 200) {
                dispatch(this.getCategories());
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
                // myData.clientError(response.data);
            }
        };
    },

    deleteCategory(categoryId) {
        return async dispatch => {
            let response = await instance.delete(`categories/${categoryId}`);
            if (response.status === 200) {
                dispatch(this.getCategories());
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
