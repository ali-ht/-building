import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Typography from '@mui/material/Typography';
import './direction.css'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 2,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function CustomizedInputBase(x) {
  return (
    <Paper
      component="form"
      color='#F3F3F3'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 438 , height: 64 , borderRadius: '45px'}}
    >
      <IconButton 
        sx={{ 
          p: '10px', 
          left: '5px' 
        }} 
        aria-label="directions"
        component="label"
        role={undefined}
        // variant="contained"
        tabIndex={-1}
        startIcon={<FileUploadOutlinedIcon sx={{ fontSize: "32" , color: '#9E9E9E' }}/>}
      >
        <FileUploadOutlinedIcon  type='file'/>
        <VisuallyHiddenInput type="file"/>
      </IconButton>
      
      <Typography
        sx={{ ml: 1, flex: 1 , position:"relative" , right: '15px'}}
        inputProps={{ 'aria-label': 'upload' }}
        color='#9E9E9E'
        fontFamily="yekan-bakh"
        fontSize='20px'
        dir='rtl'
      >
        {x}
      </Typography>
      
    </Paper>
  );
}