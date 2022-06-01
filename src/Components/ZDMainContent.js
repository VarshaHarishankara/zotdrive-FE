import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { ZDSearchBar } from './ZDSearchBar';
import {ZDProfile} from './ZDProfile';
import {ContentView,DropDownView, MainContentView, FilesAndDetailsView,FilesView, PathItem, PathView}  from './styles';
import {Button, Grid} from '@mui/material';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import {ZDFileItem} from '../components/ZDFileItem';
import { ZDRightContent } from './ZDRightContent';
import { COLORS } from '../theme/colors';
import {ZDFolderItem} from './ZDFolderItem';
import {fetchFileNames} from '../Manager/ZDDataManager'
import { addPath, getPath, popPath } from '../Manager/ZDDataUtils';
import MenuItem from '@mui/material/MenuItem';

export function ZDMainContent(props){
    const [selectedItem, setSelectedItem] = useState(null);
    const [files, setFiles] = useState([])
    const [folders, setFolders] = useState([])
    const username = localStorage.getItem("emailId");
    const [dropDownOption, setDropDownOption] = useState(10)

    useEffect(() => {
        setFiles(props.results.files)
        setFolders(props.results.folders)
        setDropDownOption(props.option)
    },[props])

    const handleUpdateData = (response) => {
        setSelectedItem(null)
        setFiles(response.files)
        setFolders(response.folders)
    }

    const handleOnClick = (file) => {
        setSelectedItem(file)
    }

    const handleDoubleClick = (folder) => {
        addPath(folder)
        fetchFileNames((response) =>{
            handleUpdateData(response)
        })
    }

    const handlePathClick = (obj, index) => {
        popPath(index+1)
        fetchFileNames((response) =>{
            handleUpdateData(response)
        })
    }

    const handleMenuItemClick = (value) =>{
        console.log(value)
        setDropDownOption(value)
        props.navigateLocation(value)
    }

    const renderPath = () => {
        const path = getPath()
        if(path.length > 1){
            return(
                <PathView>
                    {
                        path && path.map((obj,index) => {
                            return(
                                <PathItem>
                                    <Button variant="text" disabled={index == path.length -1} onClick={() => handlePathClick(obj, index)}>{obj.folder}</Button>
                                    {index != path.length -1 && <Typography variant="h6" component="div">
                                    {'>'}
                                    </Typography>}    
                                </PathItem>
                            )
                               
                        })
                    }
                </PathView>
            )
        }
    }

    return(
        <ContentView>
            <MainContentView>
                        <ZDSearchBar updatedData={handleUpdateData}/>
                        <ZDProfile profileName={username}/>
            </MainContentView>
            <DropDownView>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dropDownOption}>
                        <MenuItem value={10} onClick={() => handleMenuItemClick(10)}>My drive</MenuItem>
                        <MenuItem value={20} onClick={() => handleMenuItemClick(20)}>Shared Files</MenuItem>
                        <MenuItem value={30} onClick={() => handleMenuItemClick(30)}>Trash</MenuItem>
                    </Select>
                </FormControl>
            </DropDownView>
            <FilesAndDetailsView>
                <FilesView borderColor={COLORS.borderColor}>
                    {renderPath()}
                    <Typography variant="h5" component="div" style={{marginTop:'10px', marginLeft: '10px'}}>
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
                        {'Files'}
                    </Typography>  
                    <Grid container spacing={3}>
                        {
                            files ? files.map((file, index) => {
                                return (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Button color="inherit" onClick={() => handleOnClick(file)}>
                                        {!file.folder && <ZDFileItem selected={selectedItem != null ? '#ADD8E6' : 'transparent'} fileName={file.name} fileType={file.type}/>}
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

