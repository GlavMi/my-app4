//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

const App = () => {
    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>

            <Header/>

            <Nav/>

            <div className={'app-wrapper-content'}>
                <Route path='/Profile' component={Profile} />
            {/*<Route component = {Dialogs} />*/}
                <News/>
                <Music/>
                <Setting/>
            </div>








        </div>
        </BrowserRouter>
    )

}

export default App;
