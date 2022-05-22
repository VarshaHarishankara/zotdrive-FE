import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import {ClearView,DetailsView,DetailRowView,FileOptionsView,RightContentView,RightLabelView} from './styles';
import ClearIcon from '@mui/icons-material/Clear';
import {Button} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Menu,MenuItem} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DownloadIcon from '@mui/icons-material/Download';

export const ZDRightContent = (props) => {
    const [data, setData] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        setData(props.item) 
    },[props])

    const handleMoreOptions = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

    const fileDetails = () => {
        return(
            <DetailsView>
                <RightLabelView style={{marginRight: "20px"}}>
                    {detailsRow("Tags", "#696969")}    
                    {detailsRow("Created", "#696969")}  
                </RightLabelView>
                <RightLabelView>
                    {detailsRow(data.tags)}    
                    {detailsRow(data.createdOn)}  
                </RightLabelView>  
            </DetailsView>
        )
    }

    const detailsRow = (text, textColor) => {
        return(
            <DetailRowView>
                <Typography variant="h7" component="div" color={textColor}>
                    {text}
                </Typography>  
            </DetailRowView>
        )
    }
    const fileOptionsView = () => {
        return(
            <FileOptionsView>
                <Button variant="outlined" color="inherit">Open file</Button>
                <Button 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"  
                color="inherit" 
                startIcon={<MoreHorizIcon/>}
                onClick={handleMoreOptions}
                ></Button>
                 <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <DeleteIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Delete</ListItemText>              
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <DownloadIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Download</ListItemText>              
                    </MenuItem>
                </Menu>                   
            </FileOptionsView>
        )
    }

    const handleClearClick = () => {
        setData(null)
    }

    return(
        data ? 
        <RightContentView>
            <ClearView>
                 <Button color="inherit" onClick={handleClearClick}><ClearIcon style={{marginRight: '10px'}}/></Button>
            </ClearView>
            <Typography variant="h5" component="div" style={{wordBreak: 'break-word', margin: '20px'}}>
                    {data ? data.name : ""}
            </Typography> 
            {fileDetails()}
            {fileOptionsView()}
        </RightContentView>
        :
        <RightContentView>{"Select file or folder to see details"}</RightContentView>
    )
}