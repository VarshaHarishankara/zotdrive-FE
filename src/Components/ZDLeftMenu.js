import React, { useState } from 'react';
import { COLORS } from '../theme/colors';
import {Menu,MenuItem} from '@mui/material';
import { Storage,Bookmarks,Delete, FolderShared } from '@mui/icons-material';
import { LeftContent ,LeftMenuView, OptionsContainer,StyledButton } from './styles';
import { ZDListItem } from './ZDListItem';


export function ZDLeftMenu(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

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
                onClick={handleClick}>Upload/Create</StyledButton>
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
                    <MenuItem onClick={handleClose}>Upload Files</MenuItem>
                </Menu>
                {renderListItems()}
            </LeftContent>
        </LeftMenuView>
    )
}