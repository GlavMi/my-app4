import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redax/redax-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



/*функция отрисовки UI*/
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender=()=>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App
                    /*store = {store}  dispatch = {store.dispatch.bind(store)}*/
                     /*store = {store.getState()}
                     dispatch = {store.dispatch.bind(store)}*/
                     /*addPost = {store.addPost.bind(store)}
                     uppDateNewPostText = {store.uppDateNewPostText.bind(store)}
                     addMessages = {store.addMessages.bind(store)}
                     uppDateText = {store.uppDateText.bind((store))}*//>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerender(store.getState());  /*первый вызов для отрисовки UI*/

store.subscribe(rerender); /*колбэкфунция которой мы импортируем функцию в state от зацикла*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
