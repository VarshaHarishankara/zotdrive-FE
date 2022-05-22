import React from 'react';
import {FileIconView, FileInitialView, FileNameView, InitialContainer} from './styles'
import ArticleIcon from '@mui/icons-material/Article';
import Typography from '@mui/material/Typography';

export const ZDFileItem = (props) => {
    return(
        <FileIconView>
            <FileInitialView>
                <InitialContainer>
                    <Typography noWrap variant="h3" component="div" sx={{color: 'white'}}>
                        {'A'}
                    </Typography>    
                </InitialContainer>                
            </FileInitialView>
            <FileNameView>
                <ArticleIcon style={{margin: '10px'}}/>
                <Typography noWrap variant="h7" component="div">
                    {props.fileName}
                </Typography>    
            </FileNameView>
        </FileIconView>
    )
}