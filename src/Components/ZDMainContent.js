import React, {useState, useEffect} from 'react';
import { ZDSearchBar } from './ZDSearchBar';
import {ZDProfile} from './ZDProfile';
import {ContentView,MainContentView, FileItem,FilesView}  from './styles';
import {Button, Box, Grid} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import axios from 'axios';

export function ZDMainContent(props){
    const [searchText, setSearchText] = useState('');
    const data = props.results

    const handleDownloadFile = (event) => {
        let fileName  = event.currentTarget.value
        let url = "/file-chunk/downloadFile/"+fileName
        axios
        .get(url,{ responseType: 'blob' })
        .then((response) => {
            const filename =  response.headers['content-disposition'].split('filename=')[1]
            const url = window.URL.createObjectURL(response.data); 
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName 
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.log("fail")
        });
    }

    return(
        <ContentView>
            <MainContentView>
                        <ZDSearchBar/>
                        <ZDProfile profileName={'John Doe'}/>
            </MainContentView>
            <FilesView>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    data ? data.map((file, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Box component="span" sx={{ p: 2, border: '1px solid grey'}}>
                                <InsertDriveFileIcon/>
                                <Button value={file} onClick={handleDownloadFile}>{file}</Button>
                        </Box>
                    </Grid>
                    )) : <div></div>
                }
            </Grid>
            </FilesView>
        </ContentView>
        
    )
}

