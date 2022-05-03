import React, {useState, useEffect} from 'react';
import { ZDSearchBar } from './ZDSearchBar';
import {ZDProfile} from './ZDProfile';
import {MainContentView}  from './styles';

export function ZDMainContent(){
    const [searchText, setSearchText] = useState('');
   

    return(
        <MainContentView>
            <ZDSearchBar/>
            <ZDProfile profileName={'John Doe'}/>
        </MainContentView>
    )
}

