import React from 'react';
import {FileIconView, FileInitialView, FileNameView} from './styles'
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';

export const ZDFolderItem = (props) => {
    return(
        <FileIconView>
            <FileInitialView>
                <FolderIcon style={{fontSize: "87px"}}/>          
            </FileInitialView>
            <FileNameView>
                <Typography noWrap variant="h7" component="div" style={{marginLeft: "20px"}}>
                    {props.folder}
                </Typography>    
            </FileNameView>
        </FileIconView>
    )
}