import axios from 'axios';
// import { getLoggedInUser } from '../helpers/authUtils';

// import store from '../store';
let aPIRootUrl = ""
const env = process.env.NODE_ENV
switch (env) {
  case 'local':
    aPIRootUrl = process.env.REACT_APP_API_BASE_LOCAL_URL;
    break;
  case 'development':
    aPIRootUrl = process.env.REACT_APP_API_BASE_DEV_URL;
    break;
  case 'production':
    aPIRootUrl = process.env.REACT_APP_API_BASE_PROD_URL;
    break;
  default:
    aPIRootUrl = "";
}
const api = axios.create({
  baseURL: aPIRootUrl,
  headers : {
    "access-control-allow-origin": "*",
    "Content-type": "application/json" 
  }
});

// api.interceptors.request.use(function (config) {
//   // debugger
//   const state = typeof store !== 'undefined' ? store.getState() : { auth: {} };
//   const user = state.auth
//   const token = user.authUser === null ? '' : user.authUser.Token;
//   config.headers.Authorization = `Bearer ${token}`
//   return config
// })

export default api;