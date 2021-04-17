const loginUser = user => ({
    type: "INITIALIZED_SUCCESS",
    payload: user
});

export const authAPI = {
    userPostFetch(user) {
        return async dispatch => {
            let response = await instance.post("users", {
                user: user
            });
            if (response.data.user) {
                localStorage.setItem("token", response.data.user.token);
                dispatch(loginUser(response.data.user));
                window.history.go(-2);
            }
        };
    },

    userLoginFetch(user) {
        return async dispatch => {
            let response = await instance.post("users/login", {
                user: user
            });
            if (response.status === 200) {
                localStorage.setItem("token", response.data.user.token);
                dispatch(loginUser(response.data.user));
                window.history.go(-1);
            }

            if (response.data.errors) {
                document.getElementById("errorDiv").innerHTML =
                    "wrong email or password";
            }
        };
    },

    getProfileFetch() {
        return async dispatch => {
            const token = localStorage.token;
            if (token) {
                let response = await instance.get("users/auth", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    dispatch(loginUser(response.data.user));
                }
                if (response.message) {
                    localStorage.removeItem("token");
                } else {
                    myData.clientError(response.data);
                }
            }
        };
    }
};
