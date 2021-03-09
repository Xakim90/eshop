import history from '../history';

const url = "http://localhost:8080"
// const url = ""

const loginUser = user => ({
  type: 'INITIALIZED_SUCCESS',
  payload: user
})

const loadClients = client => ({
  type: 'LOADED_SUCCESS',
  payload: client
})

export const logoutUser = () => ({
  type: 'LOG_OUT'
});
// export const logout = () => {
//   return (dispatch) => {
//     logoutUser();
//     localStorage.removeItem('token');
//   };
// };

export const userPostFetch = user => {
  return dispatch => {
    return fetch(`${url}/api/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors !== undefined) {
          var errorKey = Object.keys(data.errors); //получаем ключи объекта в виде массива
          document.getElementById("signupErrorDiv").innerHTML = errorKey[0] + " " + data.errors[errorKey[0]];
        }
        if (data.message !== undefined) {
          console.log("data.message")
        }
        if (data.user !== undefined) {
          localStorage.setItem("token", data.user.token);
          dispatch(loginUser(data.user));
        }
      })
  }
}

export const userLoginFetch = user => {
  return dispatch => {
    return fetch(`${url}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          document.getElementById('errorDiv').innerHTML =
            'wrong email or password';
        }
        if (data.user) {
          localStorage.setItem('token', data.user.token);
          dispatch(loginUser(data.user));
          window.history.go(-1);
        }
      });
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch(`${url}/api/users/auth`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
            // Будет ошибка если token не дествительный
            localStorage.removeItem('token');
          } else if (data.user !== undefined && data.user !== null) {
            dispatch(loginUser(data.user));
          }
        });
    }
  }
}

export const getClientsFetch = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch(`${url}/api/clients`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
            // Будет ошибка если token не дествительный
            // localStorage.removeItem('token');
          } else if (data !== undefined && data !== null) {
            dispatch(loadClients(data));
          }
        });
    }
  };
};

export const clientPostFetch = (client) => {
  return (dispatch) => {
    return fetch(`${url}/api/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ client }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message !== undefined) {
          console.log('data.message');
        }
        if (data !== undefined) {
          dispatch(loadClients(data.client));
        }
        if (data.errors !== undefined) {
        }
      });
  };
};
export const removeClient = (id) => {
  return (dispatch) => {
    return fetch(`${url}/api/clients`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        debugger
        if (data.message !== undefined) {
          console.log('data.message');
        }
        if (data !== undefined) {
          debugger
          dispatch(loadClients(data.client));
        }
        if (data.errors !== undefined) {
        }
      });
  };
};

export const updateClient = ( newData ) => {
  return (dispatch) => {
    return fetch(`${url}/api/clients`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message !== undefined) {
          console.log('data.message');
        }
        if (data !== undefined) {
        }
        if (data.errors !== undefined) {
        }
      });
  };
};