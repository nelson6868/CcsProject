import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {store} from './pages/productcart/Cart/store'
import { StateProvider } from './pages/productdetails/Stateprovider';
import reducer, { initialState } from './pages/productdetails/Reducer';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';

axios.defaults.baseURL = 'https://sidcloud.azurewebsites.net/api/v1/';
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


// var cors = require('cors')
// app.use(cors())
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
