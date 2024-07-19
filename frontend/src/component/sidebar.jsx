import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import {Typography, Box} from '@mui/material';
import './custom-button.css'
import FilterVintageRoundedIcon from '@mui/icons-material/FilterVintageRounded';
import TreeView from './treeView';
import {useDispatch} from "react-redux";
import {setPage} from "../redux/slice";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    function handleAddProject(){
        dispatch(setPage("creatProject"));
    }
    function handleAddTask(){
        dispatch(setPage("creatTask"));
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', position: 'relative'}}>
            <Paper sx={{
                width: isOpen ? 361 : 92,
                height: '710px',
                right: 52,
                backgroundColor: 'white',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                boxSizing: 'border-box',
                justifyContent: 'flex-start', // Ensure items align to the top
                whiteSpace: 'nowrap',
                overflowY: isOpen ? 'auto' : 'hidden',
                overflowX: 'hidden',
                alignItems: 'center',
            }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginBottom: '10px',
                        backgroundColor: 'white',
                        zIndex: '1',
                        borderRadius: '12px'
                    }}>
                    <IconButton onClick={toggleSidebar} sx={{color: '#463F3F',}}>
                        {isOpen ? <CloseIcon sx={{fontSize: '3rem'}}/> : <MenuIcon sx={{fontSize: '2.5rem'}}/>}
                    </IconButton>
                    {isOpen && <Typography
                        sx={{fontFamily: 'vazir', fontSize: '28px', fontWeight: 500, width: '290px', textAlign: 'end'}}>نوار
                        کاربری</Typography>}
                </Box>
                <Box sx={{
                    alignSelf: 'center', display: 'flex',
                    flexDirection: isOpen ? 'row' : 'column',
                    alignItems: 'center', marginTop: '50px',
                    backgroundColor: 'rgba(241, 95, 43, 0.1)',
                    width: isOpen ? '295px' : '50px',
                    height: isOpen ? 'auto' : '50px',
                    borderRadius: isOpen ? '45px' : '50%',
                    justifyContent: isOpen ? 'right' : 'center',
                }}>
                    {isOpen && <Typography sx={{mr: 1, fontFamily: 'vazir', fontSize: '20px', fontWeight: 500}}>کارهای
                        شما</Typography>}
                    <IconButton>
                        <PermIdentityRoundedIcon sx={{color: '#F15F2B', fontSize: '32px', top: '204px'}}/>
                    </IconButton>
                </Box>
                <Box
                    sx={{marginLeft: '-30px', marginTop: '10px'}}
                >
                    {isOpen && <Box><TreeView/></Box>}
                </Box>
                <Box sx={{
                    alignSelf: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(241, 95, 43, 0.1)',
                    width: isOpen ? '295px' : '50px',
                    height: isOpen ? 'auto' : '50px',
                    borderRadius: isOpen ? '45px' : '50%',
                    // justifyContent: isOpen ? 'right' : 'center',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    flexDirection: 'row',
                    marginBottom: '10px',
                    zIndex: '1',
                    bottom: '120px'
                }}>
                    {isOpen && <Typography sx={{mr: 1, fontFamily: 'vazir', fontSize: '20px', fontWeight: 500}}>اضافه کردن پروژه</Typography>}
                    <IconButton onClick={handleAddProject}>
                        <AddCircleIcon sx={{color: '#F15F2B', fontSize: '32px', top: '204px'}}/>
                    </IconButton>
                </Box>
                <Box sx={{
                    alignSelf: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(241, 95, 43, 0.1)',
                    width: isOpen ? '295px' : '50px',
                    height: isOpen ? 'auto' : '50px',
                    borderRadius: isOpen ? '45px' : '50%',
                    // justifyContent: isOpen ? 'right' : 'center',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    flexDirection: 'row',
                    marginBottom: '10px',
                    zIndex: '1',
                    bottom: '60px'
                }}>
                    {isOpen && <Typography sx={{mr: 1, fontFamily: 'vazir', fontSize: '20px', fontWeight: 500}}>اضافه کردن کار</Typography>}
                    <IconButton onClick={handleAddTask}>
                        <AddCircleIcon sx={{color: '#F15F2B', fontSize: '32px', top: '204px'}}/>
                    </IconButton>
                </Box>
                <Box sx={{
                    alignSelf: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    width: isOpen ? '350px' : '50px',
                    height: isOpen ? '70px' : '',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    zIndex: '1',
                    bottom: '0',
                    borderRadius: '12px'
                }}>
                    <Box sx={{
                        alignSelf: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgba(241, 95, 43, 0.1)',
                        width: isOpen ? '295px' : '50px',
                        height: isOpen ? 'auto' : '50px',
                        borderRadius: isOpen ? '45px' : '50%',
                        // justifyContent: isOpen ? 'right' : 'center',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        flexDirection: 'row',
                        marginBottom: '10px',
                        zIndex: '1',
                        bottom: '0'
                    }}>
                        {isOpen && <Typography sx={{
                            mr: 1, fontFamily: 'vazir',
                            fontSize: '20px', fontWeight: 500,
                        }}>پروفایل</Typography>}
                        <IconButton>
                            <FilterVintageRoundedIcon sx={{fontSize: '32px', top: '288px', color: '#F15F2B'}}/>
                        </IconButton>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default Sidebar;
