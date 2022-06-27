import reportWebVitals from './reportWebVitals';
import state from "./redax/State";
import {rerender} from "./rerender";


rerender(state)   /*первый вызов для отрисовки UI*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
