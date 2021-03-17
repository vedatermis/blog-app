import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppRouter from "./routers/AppRouter";
import { createStore } from "redux";
import "./App.css";

const initialState = {
    count: 0
}

const store = createStore((state = initialState) => {
    return state;
});

ReactDOM.render(<AppRouter />, document.getElementById('root')
);

reportWebVitals();
