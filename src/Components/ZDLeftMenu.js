import React, { useState,useEffect,useRef } from 'react';
import axios from "axios";
import { COLORS } from '../theme/colors';
import {Menu,MenuItem} from '@mui/material';
import { Storage,Bookmarks,Delete, FolderShared } from '@mui/icons-material';
import { LeftContent ,LeftMenuView, OptionsContainer,StyledButton } from './styles';
import { ZDListItem } from './ZDListItem';
import {fetchFileNames, uploadFileToServer} from '../Manager/ZDDataManager'


export function ZDLeftMenu(props){
    const hiddenFileInput = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [uploadFile, setUploadFile] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        fetchData()
    },[])

    useEffect(() => {
        if(uploadFile != null){
            uploadFileToServer(uploadFile,() => {
                fetchData()
            })
        } 
    },[uploadFile])

    const fetchData = () => {
        fetchFileNames((result) => {
            props.updatedData(result)
        })
    }

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleUploadFileClick = () => {
        hiddenFileInput.current.click();
    }

    const renderListItems= () => {
        return(
            <OptionsContainer>
                <ZDListItem title={'My drive'} icon={<Storage/>}/>
                <ZDListItem title={'Bookmark'} icon={<Bookmarks/>}/>
                <ZDListItem title={'Shared Files'} icon={<FolderShared/>}/>
                <ZDListItem title={'Trash'} icon={<Delete/>}/>
            </OptionsContainer>
        )
    }
    return(
        <LeftMenuView borderColor={COLORS.borderColor}>
            <LeftContent>
                <h1>ZotDrive</h1>
                <StyledButton 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit"
                >Upload/Create</StyledButton>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                    <MenuItem onClick={handleClose}>Create Folder</MenuItem>
                    <MenuItem onClick={handleUploadFileClick}>
                        Upload File
                        <input type="file" 
                        ref={hiddenFileInput}
                        onChange={(e) => setUploadFile(e.target.files)} 
                        style={{display: 'none'}} />
                    </MenuItem>
                </Menu>
                {renderListItems()}
            </LeftContent>
        </LeftMenuView>
    )
}