import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple ,orange} from '@mui/material/colors';
import './custom-button.css'


const DemoButton = styled(Button)(({ theme }) => ({
    // width: 300,

    maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px',width:'200px',
    ...theme.typography.body2,
    margin:"10px",
    borderRadius: "12px",
    backgroundColor: "#F15F2B",
    color: "#FFFFFF",
    fontFamily: "yekan-bakh",
    fontSize:'24px',
    fontWeight:'700px'
  }))

  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: orange,
    },
  });

function CustomButton ({name,handleSubmit}){
    return(
        <ThemeProvider theme={theme}>
            <DemoButton onClick={handleSubmit} className='but' id='but1' variant="contained" color="secondary">{name}</DemoButton>
        </ThemeProvider>
    )
}
export default CustomButton;