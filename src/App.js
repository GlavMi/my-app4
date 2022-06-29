//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import MyFrends from "./components/MyFrends/MyFrends";


function App(props) {
    return (

            <div className={'app-wrapper'}>

                <Header/>
                <div>
                    <Nav/>
                    <MyFrends state={props.state}/>
                </div>
                <div className={'app-wrapper-content'}>

                    <Routes>
                        <Route path='/profile/*' element={<Profile state={props.state}
                                                                   addPost = {props.addPost}
                                                                   uppDateNewPostText = {props.uppDateNewPostText}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state}
                                                                   newText={props.state.dialogsPage.newText}
                                                                   addMessages = {props.addMessages}/>}
                                                                   uppDateText = {props.uppDateText}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                    </Routes>

                </div>


            </div>

    )

}

export default App;
