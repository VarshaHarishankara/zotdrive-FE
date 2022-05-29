import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { ZDSearchBar } from './ZDSearchBar';
import {ZDProfile} from './ZDProfile';
import {ContentView,MainContentView, FilesAndDetailsView,FilesView}  from './styles';
import {Button, Grid} from '@mui/material';
import axios from 'axios';
import {ZDFileItem} from '../components/ZDFileItem';
import { ZDRightContent } from './ZDRightContent';
import { COLORS } from '../theme/colors';
import {ZDFolderItem} from './ZDFolderItem';
import {fetchFileNames} from '../Manager/ZDDataManager'

export function ZDMainContent(props){
    const [searchText, setSearchText] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [files, setFiles] = useState([])
    const [folders, setFolders] = useState([])
    const username = localStorage.getItem("emailId");

    useEffect(() => {
        setFiles(props.results.files)
        setFolders(props.results.folders)
    },[props])

    const handleUpdateData = (response) => {
        setSelectedItem(null)
        setFiles(response.files)
        setFolders(response.folders)
    }

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

    const handleDoubleClick = (folder) => {
        localStorage.setItem("parentID",folder.objectid)
        fetchFileNames((response) =>{
            handleUpdateData(response)
        })
    }

    return(
        <ContentView>
            <MainContentView borderColor={COLORS.borderColor}>
                        <ZDSearchBar/>
                        <ZDProfile profileName={username}/>
            </MainContentView>
            <FilesAndDetailsView>
                <FilesView borderColor={COLORS.borderColor}>
                    <Typography variant="h5" component="div" style={{marginTop:'30px', marginLeft: '10px'}}>
                        {'Folders'}
                    </Typography>  
                    <Grid container spacing={3}>
                        {
                            folders ? folders.map((file, index) => {
                                return (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Button color="inherit" onClick={() => handleOnClick(file)} onDoubleClick={() => handleDoubleClick(file)}>
                                        {file.folder && <ZDFolderItem folder={file.name}/>}
                                    </Button>
                                </Grid>
                            )})
                            : <div></div>
                        }
                    </Grid>
                    <Typography variant="h5" component="div" style={{marginTop:'30px', marginLeft: '10px'}}>
                        {'Home Files'}
                    </Typography>  
                    <Grid container spacing={3}>
                        {
                            files ? files.map((file, index) => {
                                return (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Button color="inherit" onClick={() => handleOnClick(file)}>
                                        {!file.folder && <ZDFileItem selected={selectedItem != null ? '#ADD8E6' : 'transparent'} fileName={file.name}/>}
                                    </Button>
                                </Grid>
                            )})
                            : <div></div>
                        }
                    </Grid>
                </FilesView>
                <ZDRightContent item={selectedItem} updatedData={handleUpdateData}/>
            </FilesAndDetailsView>
           
        </ContentView>
        
    )
}

