import {combineReducers, legacy_createStore as createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import MyFrendsReducer from "./MyFrendsReducer";
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
        dialogsPage: DialogsReducer,
        profilePage: ProfileReducer,
        myFrends: MyFrendsReducer
    }
)
let store = createStore(reducers)

export default store