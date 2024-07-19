import React from 'react';
import './App.css';
import LoginSignup from "./component/login-signup";
import MainView from './component/building-mainview';
import {useSelector, useDispatch} from 'react-redux'
import {setPage} from "./redux/slice";
import CreateProjectPage from "./component/CreateProjectPage/CreateProjectPage";
import SelectProjectPage from "./component/Select-Project-Page";
import CreateWorkPage from "./component/create-work-page";
export default function App() {
    const dispatch = useDispatch();

    var page= useSelector((state) => state.counter.page);
    if(page=="loginAndSignup"&&localStorage.getItem("token")){
        dispatch(setPage("home"));
    }
    switch (page){
        case "loginAndSignup":
            return (
                <div className="App">
                    <LoginSignup/>
                </div>
            );
        case "home":
            return (
                <div className="App">
                    <MainView/>
                </div>
            );
        case "creatProject":
            return (
                <div className="App">
                    <CreateProjectPage/>
                </div>
            );
        case "selectParentProject":
            return (
                <div className="App">
                    {SelectProjectPage("CreatProject")}
                </div>
            );
        case "selectParentProject-Task":
            return (
                <div className="App">
                    {SelectProjectPage("CreatTask")}
                </div>
            );
        case "creatTask":
            return (
                <div className="App">
                    <CreateWorkPage/>
                </div>
            );
    }
}
