import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redax/State";
import {addPost} from "./redax/State";
import {BrowserRouter} from "react-router-dom";
import {uppDateNewPostText} from "./redax/State";


/*функция отрисовки UI*/
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender=(state)=>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state = {state} addPost = {addPost} uppDateNewPostText = {uppDateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerender(state);  /*первый вызов для отрисовки UI*/

subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
