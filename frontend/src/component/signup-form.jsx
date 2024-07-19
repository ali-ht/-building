import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
import { addUser } from "../redux/apiFunction/apiFunction";
import {useSelector, useDispatch } from 'react-redux'
import {useState} from "react";
import Snackbar from './Snackbar.jsx'

function SignupForm (name){
    const dispatch= useDispatch();
    const inputValue = useSelector((state) => state.counter);
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser(inputValue))
    }
    return (
        <div>
            {TextFild('نام',"SingUpFirstName")}
            {TextFild('نام خانوادگی',"SingUpLastName")}
            {TextFild('نام کاربری',"SingUpUserName")}
            {TextFild('رمز عبور',"SingUpPassword")}
            {TextFild('تکرار رمز عبور')}
            {Snackbar()}
            <CustomButton name='ثبت نام' handleSubmit={handleSubmit} />
        </div>
    )
}

export default SignupForm;