import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    LoginUserName:"",
    LoginPassword:"",
    SingUpFirstName:"",
    SingUpLastName:"",
    SingUpUserName:"",
    SingUpPassword:"",
    snackbarOpen:false,
    snackbarText:"not",
    page:"loginAndSignup",
    selectedProjectTasks:"not",
    selectedParentProject:{
        parentId:"",
        parentsArray:[]
    },
    creatProjectTitle:"",
    creatTask:{
        title:"",
        floor:"",
        description:"",
        prerequisites:"",
        projectId:"",
    }
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setLoginUserName: (state, action) => {
            state.LoginUserName = action.payload;
        },
        setLoginPassword: (state, action) => {
            state.LoginPassword = action.payload;
        },
        setSingUpFirstName: (state, action) => {
            state.SingUpFirstName = action.payload;
        },
        setSingUpLastName: (state, action) => {
            state.SingUpLastName = action.payload;
        },
        setSingUpUserName: (state, action) => {
            state.SingUpUserName = action.payload;
        },
        setSingUpPassword: (state, action) => {
            state.SingUpPassword = action.payload;
        },
        setSnackbarOpen:(state, action)=>{
            state.snackbarOpen = action.payload;
        },
        setSnackbarText:(state, action)=>{
            state.snackbarText = action.payload;
        },
        setPage:(state,action)=>{
            state.page= action.payload;
        },
        setSelectedProjectTasks:(state,action)=>{
            state.selectedProjectTasks= action.payload;
        },
        setSelectedParentProject:(state,action)=>{
            state.selectedParentProject= action.payload;
        },
        setCreatProjectTitle:(state,action)=>{
            state.creatProjectTitle= action.payload;
        },
        setCreatTaskTitle:(state,action)=>{
            state.creatTask.title= action.payload;
        },
        setCreatTaskFloor:(state,action)=>{
            state.creatTask.floor= action.payload;
        },
        setCreatTaskDescription:(state,action)=>{
            state.creatTask.description= action.payload;
        },
        setCreatTaskPrerequisites:(state,action)=>{
            state.creatTask.prerequisites= action.payload;
        },
        setCreatTaskProjectId:(state,action)=>{
            state.creatTask.projectId= action.payload;
        }
    },
})
export const {setCreatTaskTitle,setCreatTaskFloor,setCreatTaskDescription
    ,setCreatTaskPrerequisites,setCreatTaskProjectId,
    setCreatProjectTitle,
    setSelectedParentProject,
    setSelectedProjectTasks,
    setSnackbarOpen,setSnackbarText,setPage, setLoginUserName, setLoginPassword,setSingUpFirstName,setSingUpLastName,setSingUpUserName,setSingUpPassword} = counterSlice.actions

export default counterSlice.reducer