import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();


ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));

reportWebVitals();
