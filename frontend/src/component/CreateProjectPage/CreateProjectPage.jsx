import React from 'react';
import '../custom-button.css';
import '../direction';
import SwitchInput from '../switch-input';
import '../custom-button';
import {Grid, Box, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {TextField} from "@mui/material";
import EditButton from "./ButtonEdit";
import CustomButton from "./custom-button";
import CustomButton2 from "./custom-button2";
import TextFild from './text-fild';
import CustomSeparator from './direction';
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../redux/slice";
//Text input تست شد
//Switch input... تست شد
//Custom button... تست شد
//Direction...
// Default button
// const PaperStyle = {
//     backgroundColor:'rgba(255, 255, 255, 1)',
//     // top:'150px',
//     // left:'430px',
//     width:'586px',
//     height:'723px',
//     borderRadius:'30px',
//     marginLeft:'auto',
//     marginRight:'auto',
//     marginTop:'75px',
//     marginBottom:'auto'
// }
// const TitleStyle={
//     fontFamily:'vazir',
//     fontWeight:'700px',
//     fontSize:'40px',
//     color:'(70, 63, 63, 1)',
//     paddingTop: '67px',
//     marginLeft: '152px',
//     marginRight: 'auto'
// }
// const TextFieldStyle ={
//     width: '438px',
//     backgroundColor: 'rgba(243, 243, 243, 1)',
//     marginLeft:'68px',
//     borderRadius: '45px',
//     border:'none',
//     borderColor:'rgba(243, 243, 243, 1)',
//     direction:'rtl',
//     fontFamily: 'vazir',
//     marginTop: '50px'
// }
// const SwitchStyle={
//     marginLeft:'68px',
//     fontFamily:'vazir',
//     fontSize: '20px',
//     fontWeight: '500px',
//     marginTop:'50px'
// }
// const EditButtonStyle={
//     marginLeft:'68px',
//     marginTop:'50px',
//     width:'438px',
// }
function CreateProjectPage() {
    const dispatch = useDispatch();
    const parentsArray = useSelector((state) => state.counter.selectedParentProject.parentsArray);

    function setParentProject() {
        dispatch(setPage("selectParentProject"));
    }
    function handleExit() {
        dispatch(setPage("home"));
    }
    const title=useSelector((state) => state.counter.creatProjectTitle);
    const parentId=useSelector((state) => state.counter.selectedParentProject.parentId);
    function handleSubmit() {
        fetch("http://5.34.206.186:3000/project", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            type: "CREATE_PROJECT",
            body: JSON.stringify({
                body:{
                    title:title,
                    parentId:parentId
                },
                token: localStorage.getItem("token")
            }),
        }).then((response) => response.json())
            .then((json) => dispatch(setPage("home")));
    }
    return (
        <Box my={9}>
            <Grid
                sx={{
                    height: "650px",
                    width: "500px",
                    bgcolor: "white",
                    borderRadius: "30px",
                    fontSize: "36px",
                    justifyContent: 'center',
                    marginTop: "-25px",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                container
            >

                <Typography
                    sx={{
                        fontSize: "40px",
                        fontWeight: '700px',
                        mt: '30px',
                        fontFamily: "yekan",
                        marginTop: '67px'
                    }}
                > ایجاد پروژه جدید </Typography>

                <Grid sx={{marginTop: '-21px', fontSize: '50px'}}>{TextFild('عنوان پروژه')}</Grid>
                <Grid sx={{
                    width: '400px',
                    fontFamily: 'yekan',
                    fontSize: '20px',
                    fontWeight: '500px',
                    marginTop: '-20px',
                    lMarginLeft: '-50px',
                    textAlign: 'right'
                }}>
                    <SwitchInput sx={{
                        marginRight: '55px'
                    }}/>
                    آیا این پروژه زیر مجموعه پروژه دیگری است؟
                </Grid>
                <EditButton
                    handleClick={setParentProject}
                    sx={{
                        marginLeft: '68px',
                        marginBottom: '50px',
                        width: '400px',
                        height: '50px',
                    }}></EditButton>

                <Grid sx={{marginTop: '-10px'}}>{CustomSeparator(parentsArray)}</Grid>


                <Grid sx={{marginTop: '3px'}}><CustomButton2 name='انصراف' handleSubmit={handleExit}/></Grid>
                <Grid sx={{marginTop: '3px'}}><CustomButton name='ایجاد' handleSubmit={handleSubmit}/></Grid>
            </Grid>
        </Box>
    )
}

export default CreateProjectPage