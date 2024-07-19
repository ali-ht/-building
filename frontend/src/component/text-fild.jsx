import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import './text-fild.css'
import {useSelector, useDispatch } from 'react-redux'
import {
    setLoginUserName,
    setLoginPassword,
    setSingUpFirstName,
    setSingUpLastName,
    setSingUpUserName,
    setSingUpPassword,
    setCreatTaskTitle
} from './../redux/slice'
const DemoInput = styled(TextField)(({ theme }) => ({
    width: '340px',
    height:'50px',
    ...theme.typography.body2,
    borderRadius: "45px",
    margin: "12px 6px 6px 12px",
    textAlign: 'right',
    backgroundColor: '#F3F3F3',
    disableUnderline: true,
    display: 'inline-block',
    "& fieldset": { border: 'none' },
    "& label": {
        width: "100%",
        textAlign: "right",
        transformOrigin: "center",
        "&.Mui-focused": {
            transformOrigin: "center"
        }
    }
}))

function TextFild(name,sliceName) {
    // const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    function dispatchSwitch(sliceName,v){
        switch (sliceName) {
            case "SingUpFirstName":
                dispatch(setSingUpFirstName(v.target.value));
                break;
            case "SingUpLastName":
                dispatch(setSingUpLastName(v.target.value));
                break;
            case "SingUpUserName":
                dispatch(setSingUpUserName(v.target.value));
                break;
            case "SingUpPassword":
                dispatch(setSingUpPassword(v.target.value));
                break;
            case "LoginUserName":
                dispatch(setLoginUserName(v.target.value));
                break;
            case "LoginPassword":
                dispatch(setLoginPassword(v.target.value));
                break;
            case "CreatWorkTitle":
                dispatch(setCreatTaskTitle(v.target.value));
                break;
            default :
                break;
        }
    }
    return (<Box><p></p><DemoInput onChange={e => dispatchSwitch(sliceName,e)} className="inp" id="outlined-basic1" label={name} variant="outlined" InputLabelProps={{ style: { fontFamily: "vazir" , color:"#9E9E9E"} }} inputProps={{ style: { fontFamily: "vazir", textAlign: 'right'} }} /></Box>)
}
// export default TextFild;
export default TextFild;
