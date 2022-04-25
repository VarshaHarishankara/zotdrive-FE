import React, {useState, useEffect} from 'react';
import { ZDSearchBar } from './ZDSearchBar';
import {MainContentView}  from './styles';

export function ZDMainContent(){
    const [searchText, setSearchText] = useState('');
   

    return(
        <MainContentView>
            <ZDSearchBar/>
        </MainContentView>
    )
}

