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
import MyFrends from "./components/MyFrends/MyFrends";

function App(props) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>

                <Header/>
                <div>
                    <Nav/>
                    <MyFrends state={props.state}/>
                </div>


                <div className={'app-wrapper-content'}>

                    <Routes>
                        <Route path='/profile/*' element={<Profile state={props.state}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                    </Routes>

                </div>


            </div>
        </BrowserRouter>
    )

}

export default App;
