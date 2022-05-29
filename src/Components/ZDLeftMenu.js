import React, { useState,useEffect } from 'react';
import { COLORS } from '../theme/colors';
import {Menu,MenuItem} from '@mui/material';
import { Storage,Bookmarks,Delete, FolderShared } from '@mui/icons-material';
import { LeftContent ,LeftMenuView, OptionsContainer,StyledButton } from './styles';
import { ZDListItem } from './ZDListItem';
import {fetchFileNames, uploadFileToServer} from '../Manager/ZDDataManager'
import { ZDFileDialog } from './ZDFileDialog';
import { ZDFolderDialog } from './ZDFolderDialog';


export function ZDLeftMenu(props){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDialog, setOpenDialog] = useState(false)
    const [openFolderDialog, setOpenFolderDialog] = useState(false)

    useEffect(() => {
        fetchData()
    },[])

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
        handleClose()
        setOpenDialog(true)
    }

    const handleCreateFolder = () => {
        handleClose()
        setOpenFolderDialog(true)
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

    const renderDialog = () => {
        return(
            <ZDFileDialog isOpen={openDialog} shouldFetchData={fetchData} handleDialogClose={(value) => setOpenDialog(value)}/>
        )
    }

    const renderFolderDialog = () =>{
        return(
            <ZDFolderDialog isOpen={openFolderDialog} shouldFetchData={fetchData} handleDialogClose={(value) => setOpenFolderDialog(value)}/>
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
                    <MenuItem onClick={handleCreateFolder}>Create Folder</MenuItem>
                    <MenuItem onClick={handleUploadFileClick}>Upload File</MenuItem>
                </Menu>
                {renderListItems()}
                {renderDialog()}
                {renderFolderDialog()}
            </LeftContent>
        </LeftMenuView>
    )
}