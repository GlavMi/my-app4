//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

 function  App(props) {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>

            <Header/>

            <Nav/>

            <div className={'app-wrapper-content'}>

            <Routes>
                <Route path='/profile/*' element ={<Profile postsData={props.postsData} />} />
                <Route path='/dialogs/*' element = {<Dialogs dialogsData ={props.dialogsData} messagesData = {props.messagesData}/>}/>
                <Route path='/news'  element ={<News/>}/>
                <Route path='/music'  element = {<Music/>}/>
                <Route path='/setting' element = {<Setting/>}/>
            </Routes>

            </div>

        </div>
        </BrowserRouter>
    )

}

export default App;
