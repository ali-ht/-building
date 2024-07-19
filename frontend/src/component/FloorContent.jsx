import React from 'react'
import {Avatar, Container, Grid} from '@mui/material'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CustomizedDialogs from './task-dialog';

// function projectHandler(value) {
//     projects = value;
// }


export default function FloorContent(tasks) {
    // console.log(tasks);
    const avatars = [];
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
        avatars.push(
            <CustomizedDialogs keyy={i} task={tasks[i]} />
        );
    }


    return (
        <Grid sx={{padding: '2.8px'}}>
            <Paper
                dir='rtl'
                sx={{
                    margin: '5px',
                    overflow: 'auto',
                    width: '600px',
                    height: '95px',
                    borderRadius: '20px',
                    boxShadow: '3',
                    backgroundColor: '#FFFFFF',
                    // whiteSpace: 'nowrap',
                    overflowX: 'auto',
                    m: "auto",
                    position: 'relative',
                    scrollMargin: '100px',

                }}
            >

                <Card sx={{backgroundColor: '#FFFFFF', minWidth: '150vh', minHeight: '90px', alignContent: 'center'}}>
                    {avatars}
                </Card>
            </Paper>
        </Grid>
    )
}