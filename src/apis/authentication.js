import axios from 'axios';

// const baseUrl = 'http://localhost:3001/';
const baseUrl = 'https://auth-app-rails-back.herokuapp.com/';

const login = payload => axios.post(`${baseUrl}api/v1/login`, payload);

const logout = () =>
  axios.delete(`${baseUrl}api/v1/logout`, { withCredentials: true });

const signup = payload =>
  axios.post(`${baseUrl}api/v1/users`, payload, { withCredentials: true });

const authenticationApi = {
  login,
  logout,
  signup,
};

export default authenticationApi;
