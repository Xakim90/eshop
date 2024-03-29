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
            try {
                let res = await instance.post("categories", category);
                if (res.data) {
                    dispatch(this.getCategories());
                    document.getElementById("requestSuccessInfo").innerText =
                        "Категория успешно создана!";
                }
            } catch (e) {
                let errorText;
                if (e.response.status === 422) {
                    errorText = "все поля обязательны для заполнения";
                } else {
                    errorText = "произошла ошибка";
                }
                document.getElementById(
                    "requestErrorInfo"
                ).innerText = `${errorText}`;
            }
        };
    },

    getCategories() {
        return async dispatch => {
            let response = await instance.get("categories");
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