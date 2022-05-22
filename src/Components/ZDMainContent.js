import React, {useState, useEffect} from 'react';
import { ZDSearchBar } from './ZDSearchBar';
import {ZDProfile} from './ZDProfile';
import {ContentView,MainContentView, FilesAndDetailsView,FilesView}  from './styles';
import {Button, Grid} from '@mui/material';
import axios from 'axios';
import {ZDFileItem} from '../components/ZDFileItem';
import { ZDRightContent } from './ZDRightContent';
import { COLORS } from '../theme/colors';

export function ZDMainContent(props){
    const [searchText, setSearchText] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const data = props.results.data
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

    const handleOnClick = (file) => {
        setSelectedItem(file)
    }
    return(
        <ContentView>
            <MainContentView>
                        <ZDSearchBar/>
                        <ZDProfile profileName={'John Doe'}/>
            </MainContentView>
            <FilesAndDetailsView>
                <FilesView borderColor={COLORS.borderColor}>
                    <Grid container spacing={3}>
                        {
                            data ? data.map((file, index) => {
                                return (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Button color="inherit" onClick={() => handleOnClick(file)}><ZDFileItem fileName={file.name}/></Button>
                                </Grid>
                            )})
                            : <div></div>
                        }
                    </Grid>
                </FilesView>
                <ZDRightContent item={selectedItem}/>
            </FilesAndDetailsView>
           
        </ContentView>
        
    )
}

