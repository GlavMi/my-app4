import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Posts from "./components/Profile/MyPosts/Posts/Posts";
import Messages from "./components/Dialogs/Messsages/Messages";

let postsData = [
    {id: 1, message: "Hi! how are you?", likeCounter: "25"},
    {id: 2, message: "It's my first post!", likeCounter: "19"},
    {id: 2, message: "It's my first post!", likeCounter: "19"},
    {id: 2, message: "It's my first post!", likeCounter: "19"},
    {id: 2, message: "It's my first post!", likeCounter: "19"},
    {id: 2, message: "It's my first post!", likeCounter: "19"}
]
let dialogsData=[
    {id:1, name:'Mikhail'},
    {id:2, name:'Nady'},
    {id:3, name:'Dmitriy'},
    {id:4, name:'Alex'},
]
let messagesData=[
    {id:1, text:'Hello!'},
    {id:1, text:'How are you?'},
    {id:1, text:'I am fine!'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData = {postsData} dialogsData = {dialogsData} messagesData = {messagesData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
