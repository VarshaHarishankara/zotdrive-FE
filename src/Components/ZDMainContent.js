import React, {useState, useEffect} from 'react';
import { ZDSearchBar } from './ZDSearchBar';
import {ZDProfile} from './ZDProfile';
import {ContentView,MainContentView, FileItem,FilesView}  from './styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export function ZDMainContent(props){
    const [searchText, setSearchText] = useState('');
    const data = props.results
    return(
        <ContentView>
            <MainContentView>
                        <ZDSearchBar/>
                        <ZDProfile profileName={'John Doe'}/>
            </MainContentView>
            <FilesView>
                {
                data  ? data.map((file) => 
                    <FileItem>
                        <Box component="span" sx={{ p: 2, border: '1px solid grey'}}>
                            <InsertDriveFileIcon/>
                            <Button>{file}</Button>
                        </Box>
                        <br/>
                    </FileItem>
                    ) : <div></div>
                }
                    
            </FilesView>
        </ContentView>
        
    )
}

