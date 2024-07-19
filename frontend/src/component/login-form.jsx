import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
import Snackbar from './Snackbar.jsx'
import {useDispatch, useSelector} from "react-redux";
import {addUser, loginUser} from "../redux/apiFunction/apiFunction";

function LoginForm (name){
    const dispatch= useDispatch();
    const inputValue = useSelector((state) => state.counter);
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginUser(inputValue));
    }
    return(
        <div>
            {TextFild('نام کاربری',"LoginUserName")}
            {TextFild('رمز عبور',"LoginPassword")}
            {Snackbar()}
            <CustomButton name='وارد شوید' handleSubmit={handleSubmit} />
        </div>
    )
}
export default LoginForm;
//نام کاربری و یا رمز عبور اشتباه اس