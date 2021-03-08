import * as axios from 'axios';

const url = 'http://localhost:8000';
// const url = 'http://laravel-react-eshop.herokuapp.com'
// const url = env(DEV_DB_URL);
console.log(url);

const instance = axios.create({
  baseURL: `${url}/api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const loginUser = (user) => ({
  type: 'INITIALIZED_SUCCESS',
  payload: user,
});

const loadClients = (client) => ({
  type: 'LOADED_SUCCESS',
  payload: client,
});

export const logoutUser = () => ({
  type: 'LOG_OUT',
});

const myData = {
  authError: function (data) {
    if (data.errors) {
      document.getElementById('errorDiv').innerHTML = 'wrong email or password';
    }
  },
  setToken: (data) => {
    if (data.user) {
      localStorage.setItem('token', data.user.token);
      dispatch(loginUser(data.user));
      window.history.go(-1);
    }
  },
  dataUser: (data) => {
    if (data.message) {
      localStorage.removeItem('token');
    } else if (data.user) {
      dispatch(loginUser(data.user));
    }
  },
  dataMessage: (data) => {
    if (data.message) {
      console.log(data.message);
    }
  },
  dispatchClient: (data) => {
    if (data) {
      dispatch(loadClients(data));
    }
  },
  clientError: (data) => {
    if (data.errors) {
      console.log(data.errors);
    }
  },
};

export const usersAPI = {

  userPostFetch(user) {
    return async (dispatch) => {
      let response = await instance.post('users', {
        user: user,
      });
      if (response.data.user) {
        localStorage.setItem('token', response.data.user.token);
        dispatch(loginUser(response.data.user));
        window.history.go(-2);
      }
    };
  },

  userLoginFetch(user) {
    return async (dispatch) => {
      let response = await instance.post('users/login', {
        user:  user,
      })
      if (response.status === 200) {
        localStorage.setItem('token', response.data.user.token);
        dispatch(loginUser(response.data.user));
        window.history.go(-1);
      }

      if ( response.data.errors) {
        document.getElementById('errorDiv').innerHTML =
          'wrong email or password';
      }
    };
  },

  getProfileFetch() {
    return async (dispatch) => {
      const token = localStorage.token;
      if (token) {
        let response = await instance.get('users/auth', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          dispatch(loginUser(response.data.user));
        }
        if (response.message) {
          localStorage.removeItem('token');
        } else {
          myData.clientError(response.data);
        }
      }
    };
  },
};

export const clientAPI = {
  getClientsFetch() {
    return async (dispatch) => {
      let response = await instance.get('clients');
      if (response.status === 200) {
        dispatch(loadClients(response.data));
      } else {
        myData.clientError(response.data);
      }
    };
  },

  clientPostFetch(client) {
    return async (dispatch) => {
      let response = await instance.post('clients', {
        params: client,
      });
      if (response.status === 200) {
        dispatch(this.getClientsFetch());
      } else {
        myData.clientError(response.data);
      }
    };
  },

  removeClient(id) {
    return async (dispatch) => {
      let response = await instance.delete(`clients/${id}`);
      if (response.status === 200) {
        dispatch(this.getClientsFetch());
      } else {
        myData.clientError(response.data);
      }
    };
  },

  updateClient(newData) {
    return async (dispatch) => {
      let response = await instance.put('clients', {
        params: newData,
      });
      if (response.status === 200) {
        dispatch(this.getClientsFetch());
      } else {
        myData.clientError(response.data);
      }
    };
  },
};
