import * as React from 'react';
import {Typography , Alert , Snackbar , Grid , Button} from '@mui/material';
import {useSelector, useDispatch } from 'react-redux'
import './text-fild.css'
import {setSnackbarOpen} from "../redux/slice";
export default function CustomizedSnackbars() {
  // const [open, setOpen] = React.useState(false);
  //
  // const handleClick = () => {
  //   setOpen(true);
  // };
  //
      const dispatch = useDispatch();
  const handleClose = () => {
      dispatch(setSnackbarOpen(false));
  };
    var open= useSelector((state) => state.counter.snackbarOpen);
    var text= useSelector((state) => state.counter.snackbarText);
  return (
    <Grid
      sx={{
        width: "400px",
        height: "40px",
        position: "relative",
        width: '100%'
      }}>
      {/*<Button onClick={handleClick}>Open Snackbar</Button>*/}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{
          position: "absolute",
          textAlign: 'right',
          '& .css-ptiqhd-MuiSvgIcon-root': {
            position: 'relative',
            top: '0px',
            fontSize: '35px'
          },
          '& .css-1pxa9xg-MuiAlert-message': {
            fontSize: '16px'
          },
          '& .css-ki1hdl-MuiAlert-action': {
            backgroundColor: '#9C0E0E',
            position: 'relative',
            left: '-19px',
            borderRadius: '12px 0px 0px 12px',
            width: '30px',
            height: '48px',
            top: '-6px'
          },
        }}

        open={open} autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          dir='rtl'
          icon={false}
          severity='error'
          onClose={handleClose}
          variant="filled"
          sx={{
            borderRadius: '12px', width: '100%', fontFamily: 'vazir', maxWidth: '285px', maxHeight: '40px', minWidth: '285px', minHeight: '40px', backgroundColor: '#E92C08', textAlign: 'right'
          }}
        >
          <Typography
            sx={{ fontFamily: 'vazir', whiteSpace: 'nowrap', marginLeft: 30 }}>
            {text}
          </Typography>
        </Alert>
      </Snackbar>
    </Grid>
  );
}