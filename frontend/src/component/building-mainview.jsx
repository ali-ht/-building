import Floor from './floor-frame';
import FloorContent from "./FloorContent";
import { Grid, Paper } from "@mui/material";
import Sidebar from "./sidebar";
import {useSelector} from "react-redux";
import "./login-singup.css"
function MainView (){
    const tasks=useSelector((state) => state.counter.selectedProjectTasks);
    if (tasks[6]){
        return(
            <Grid
                sx={{height:'100vh'}}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-s"
            >

                <Paper  sx={{height:'705px' , backgroundColor:'#F3F3F3' , borderRadius:'12px',margin:'10px 10px',padding:'6px'}}>
                    {FloorContent(tasks[6])}
                    {FloorContent(tasks[5])}
                    {FloorContent(tasks[4])}
                    {FloorContent(tasks[3])}
                    {FloorContent(tasks[2])}
                    {FloorContent(tasks[1])}
                    {FloorContent(tasks[0])}
                </Paper>

                <Paper  sx={{height: '705px' , backgroundColor:'#F3F3F3' , borderRadius:'12px',margin:'10px 20px 0px 0px',padding:'6px'}}>
                    <Floor FloorNumber={7}/>
                    <Floor FloorNumber={6}/>
                    <Floor FloorNumber={5}/>
                    <Floor FloorNumber={4}/>
                    <Floor FloorNumber={3}/>
                    <Floor FloorNumber={2}/>
                    <Floor FloorNumber={1}/>
                </Paper>
                <Grid sx={{margin:'10px 20px 0px 0px' , padding:'6px'}}>
                    <Sidebar/>
                </Grid>
            </Grid>
        )
    }else{
        return(
            <Grid
                sx={{height:'100vh'}}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-s"
            >

                <Paper  sx={{height:'700px' , backgroundColor:'#F3F3F3' , borderRadius:'12px',margin:'15px 10px',padding:'6px',width:'800px',fontFamily:'yekan',textAlign:'center'}}>
                    هنوز پروژه ای انتخاب نکردیدkhu
                </Paper>
                <Grid sx={{margin:'10px 20px 0px 0px' , padding:'6px'}}>
                    <Sidebar/>
                </Grid>
            </Grid>
        )
    }

}
export default MainView;