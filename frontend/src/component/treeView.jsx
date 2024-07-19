import * as React from 'react';
import Box from '@mui/material/Box';
import {TreeView} from '@mui/x-tree-view/TreeView';
import {TreeItem} from '@mui/x-tree-view/TreeItem';
import {Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './treeView.css';
import {setSelectedProjectTasks} from "./../redux/slice";
import {store} from "../redux/store";

var projects;

function projectHandler(value) {
    projects = value;
}

fetch("http://5.34.206.186:3000/projects", {
    method: "POST",
    headers: {'Content-type': 'application/json'},
    type: "GET_PROJECTS",
    body: JSON.stringify({
        token: localStorage.getItem("token")
    })
}).then((response) => response.json())
    .then((json) => projectHandler(json.body));


export default function treeView() {
    // const handleSelect = styled(TreeItem)(() => ({
    // 	backgroundColor:'red'
    // }))
    const data = {
        id: 'root',
        title: 'پروژه ها',

        children: projects,

    };
    const getAncestors = (id, children, ancestors = []) => {
        for (let node of children) {
            if (node.id === id) {
                return ancestors.concat(node.title);
            } else if (node.id === 'root') return ancestors.concat('پروژه ها')
            const found = getAncestors(id, node.children, ancestors.concat(node.title));
            if (found) {
                return found;
            }
        }
        return undefined;
    };

    const SelectState = (id) => {
        const IDofSelected = id;
        fetch("http://5.34.206.186:3000/gettasks", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                body:{
                    projectId:IDofSelected
                },
                token: localStorage.getItem("token")
            }),
        }).then((response) => response.json())
            .then((json) => store.dispatch(setSelectedProjectTasks(json.body)));

    };
    const renderTree = (nodes) => (

        <Container>

            <TreeItem
                sx={{
                    '& > .MuiTreeItem-content.Mui-selected': {
                        color: 'rgba(241, 95, 43, 1)',
                    },


                    '& .css-1bcfi89-MuiTreeItem-content.Mui-selected': {
                        backgroundColor: '#fff !important',
                    },
                    '& .css-1oqqzyl-MuiContainer-root': {
                        marginLeft: '-13%'
                    },
                    '& .css-i4bv87-MuiSvgIcon-root': {
                        marginRight: '-470%',
                        marginTop: '-20%'
                    },
                }}
                nodeId={nodes.id}
                onClick={() => SelectState(nodes.id)}
                label={
                    <Typography
                        sx={{
                            borderRadius: '45px',
                            fontSize: '15px',
                            color: 'black',
                            //   mt:'1px',
                            mb: '3px',
                            //   mr:'2px',
                            //   pr:'center',
                            p: '8px 20px 8px 8px',
                            //   pb: '-3px',
                            fontFamily: 'vazir',
                            textAlign: 'right',
                            bgcolor: 'rgba(241, 95, 43, 0.2)',
                            //SALA
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            //   "&$selected": {
                            // 	backgroundColor: "red"},
                            ":hover": {
                                whiteSpace: 'normal',
                                border: "2px solid rgba(241, 95, 43, 1)",
                                backgroundColor: 'rgba(241, 95, 43, 0.25)',
                                overflow: 'visible',
                                // overflowWrap:'break-word',
                            },
                            maxHeight: "30px",
                            maxWidth: 'auto',
                            height: "fit-content",


                        }}>
                        {nodes.title}</Typography>}
            >

                {Array.isArray(nodes.children)
                    ? nodes.children.map((node) => renderTree(node))
                    : null}
            </TreeItem>
        </Container>

    );


    return (
        <Box sx={{

            height: '100hv',
            width: '0%',
            bgcolor: "white",
        }}

        >
            <TreeView
                sx={{
                    width: '400px'
                }}
                aria-label="rich object"
                defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
                defaultExpandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
                defaultExpanded={['root']}
            >
                {renderTree(data)}
            </TreeView>
        </Box>
    )
}









