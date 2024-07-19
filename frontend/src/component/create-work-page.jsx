import TextFild from "./text-fild";
// import SelectInput from "./select-input";
import CustomizedInputBase from "./AttachFileInput";
import { Grid , Box , Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText, TableRow, ButtonGroup, Button} from "@mui/material";
import './login-singup.css'
import React, { useState } from "react";
import LongTextField from "./LongTextField";
import CustomButton from "./CreateProjectPage/custom-button";
import CustomButton2 from "./CreateProjectPage/custom-button2";
import {setCreatTaskFloor, setPage} from "../redux/slice";
import {useDispatch, useSelector} from "react-redux";


function WorkView (){

    const [floor, setFloor] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setFloor(event.target.value);
        dispatch(setCreatTaskFloor(event.target.value));
    };
    function handleExit() {
        dispatch(setPage("home"));
    }
    function setParentProject() {
        dispatch(setPage("selectParentProject-Task"));
    }
    const title=useSelector((state) => state.counter.creatTask.title);
    const projectId=useSelector((state) => state.counter.creatTask.projectId);
    const description=useSelector((state) => state.counter.creatTask.description);
    const prerequisites=useSelector((state) => state.counter.creatTask.prerequisites);
    const taskFloor=useSelector((state) => state.counter.creatTask.floor);
    function handleSubmit() {
        fetch("http://5.34.206.186:3000/task", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            type: "CREATE_TASK",
            body: JSON.stringify({
                body:{
                    projectId:projectId,
                    title:title,
                    description:description,
                    prerequisites:prerequisites,
                    floor:taskFloor,
                    image:{}
                },
                token: localStorage.getItem("token")
            }),
        }).then((response) => response.json())
            .then((json) => dispatch(setPage("home")));
    }
    return(
        <Box my={1} >
            <Grid
                sx={{
                    height: "723px",
                    width: "500px",
                    bgcolor: "white",
                    borderRadius: "30px",
                    fontSize: "36px",
                    justifyContent: 'center',
                    margin: "auto",
                }}
                container
            >

                <Typography
                    sx={{
                        fontSize: "35px",
                        mt: '10px',
                        position: 'relative',
                        fontFamily: "yekan",
                    }}
                >ایجاد کار جدید</Typography>
                <Grid sx={{mt: '-20px'}}>{TextFild('عنوان کار',"CreatWorkTitle")}</Grid>
                <Grid sx={{mt: '-20px'}}><CustomButton name='انتخاب پروژه' handleSubmit={setParentProject}/></Grid>

                <Grid sx={{direction:'rtl',mt: '-20px'}}>
                    <FormControl fontSize='30px'  variant="filled" sx={{  m: 1.5, minWidth: 340, Height: '50px', backgroundColor: "F3F3F3" }}>
                        <InputLabel id="demo-customized-select-label" color='warning' bo  sx={{width:'290px',fontFamily: 'yekan', color:'9E9E9E' }}>انتخاب طبقه</InputLabel>
                        <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            value={floor}
                            label="Floor"
                            onChange={handleChange}
                            sx={{borderRadius: '45px',color:'9E9E9E',fontFamily: 'yekan'}}
                            backgroundColor = "F3F3F3"
                            color= 'warning'
                            disableUnderline= 'true'
                            dir="rtl"
                            fontFamily= 'yekan'
                        >
                            <MenuItem value={1} sx={{borderRadius: '25px',borderBlockStartWidth: '12px', direction: 'rtl',fontFamily: 'yekan',color:'9E9E9E' }}>طبقه اول</MenuItem>
                            <MenuItem value={2} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه دوم</MenuItem>
                            <MenuItem value={3} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه سوم</MenuItem>
                            <MenuItem value={4} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه چهارم</MenuItem>
                            <MenuItem value={5} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه پنجم</MenuItem>
                            <MenuItem value={6} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه ششم</MenuItem>
                            <MenuItem value={7} sx={{borderRadius: '25px', direction: 'rtl',fontFamily: 'yekan'}}>طبقه هفتم</MenuItem>
                        </Select>
                        {/* <FormHelperText>طبقه ای که کار باید در آن تعریف شود را انتخاب کنید</FormHelperText> */}
                    </FormControl>
                </Grid>
                <Grid >{LongTextField('شرح مختصر کار',"CreatTaskDescription")}</Grid>
                <Grid>{LongTextField('شرح پیش نیاز',"CreatTaskPrerequisites")}</Grid>
                <Grid
                    sx={{
                        fontSize: "40px",
                        mt: '-15px',
                        position: 'relative',
                        fontFamily: "yekan",

                    }}
                >{CustomizedInputBase('تصویر شاخص کار')}</Grid>
                <Grid
                    sx={{
                        fontSize: "40px",
                        mt: '-5px',
                        position: 'relative',
                        fontFamily: "yekan",

                    }}
                >{CustomizedInputBase('فایل پیوست')}</Grid>


                {/* <ButtonGroup
            variant="contained"
            color='warning'
            sx={{margin: 'auto',borderRadius:'15px',
          }}

          >
            <Button sx={{width:'213px',height:'55px', borderRadius: '15px',fontFamily: 'yekan'}} href=''>انصراف</Button>
            <Button sx={{width:'213px',borderRadius: '15px',fontFamily: 'yekan'}}>ایجاد</Button>
          </ButtonGroup> */}
                <Grid sx={{mt: '-15px'}}><CustomButton2 name='انصراف' handleSubmit={handleExit}/></Grid>

                <Grid sx={{mt: '-15px',ml:'-15px'}}><CustomButton name='ایجاد' handleSubmit={handleSubmit}/></Grid>

            </Grid>
        </Box>
    )}

export default WorkView;