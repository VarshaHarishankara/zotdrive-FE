import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Search from '@mui/icons-material/Search';
import { MainView, SearchView, WhiteBorderTextField } from './styles';

export function ZDSearchBar(){
    const [searchText, setSearchText] = useState("")

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        
    },[searchText])

    return(
        <MainView>
            <SearchView>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <WhiteBorderTextField 
                value={searchText}
                onChange={handleSearchTextChange}
                id="input-with-sx" 
                fullWidth 
                label="Search file or folder" 
                variant="standard" />
            </Box>
            </SearchView>
        </MainView>
    )
}