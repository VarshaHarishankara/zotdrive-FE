import React, {useState, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import { MainView, SearchView } from './styles';

export function ZDSearchBar(){
    return(
        <MainView>
            <SearchView>
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search file or folder"
                />
            </SearchView>
        </MainView>
    )
}