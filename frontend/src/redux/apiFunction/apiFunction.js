import {createAsyncThunk} from "@reduxjs/toolkit";
import {setSnackbarOpen,setSnackbarText,setPage,setProjects} from "../slice";
import {store} from './../store';
function snackBarHandle(value){
    store.dispatch(setSnackbarText(value.text));
    store.dispatch(setSnackbarOpen(true));
    if (value.type=="SUCCESS"){
        localStorage.setItem("token",value.token);
        store.dispatch(setPage("home"));
    }else{
        localStorage.clear();
    }
}
export const addUser= createAsyncThunk("user/addUser", async(values)=>{
    return fetch("http://5.34.206.186:3000/register", { method:"POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            firstname: values.SingUpFirstName,
            lastname: values.SingUpLastName,
            username: values.SingUpUserName,
            password: values.SingUpPassword
        })
    }).then((response) => response.json())
        .then((json) =>  snackBarHandle(json.type == "ERROR" ? {text:json.body.txt,type:"ERROR"} : {text:"ثبت‌نام شما با موفقیت انجام شد.",type:"SUCCESS",token:json.body.token}));

});
export const loginUser= createAsyncThunk("user/loginUser", async(values)=>{
    return fetch("http://5.34.206.186:3000/signin", { method:"POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            username: values.LoginUserName,
            password: values.LoginPassword
        })
    }).then((response) => response.json())
        .then((json) => snackBarHandle(json.type == "ERROR" ? {text:json.body.txt,type:"ERROR"} : {text:"شما با موفقیت وارد شدید.",type:"SUCCESS",token:json.body.token}));



});
// function projectHandler(value){
//     store.dispatch(setProjects(value));
// }
// export const getProjects=
//     // ()=>{console.log("salam")};
//     createAsyncThunk("user/loginUser", async(value)=>{
//         console.log("salam");
//     return fetch("http://5.34.206.186:3000/projects", { method:"POST",
//         headers: {'Content-type': 'application/json'},
//         type: "GET_PROJECTS",
//         body: JSON.stringify({
//             token: localStorage.getItem("token")
//         })
//     }).then((response) => response.json())
//         .then((json) => projectHandler(json.body));
// });