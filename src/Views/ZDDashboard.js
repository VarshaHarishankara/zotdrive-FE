import React from 'react';
import { ZDLeftMenu } from '../Components/ZDLeftMenu';
import { ZDMainContent } from '../Components/ZDMainContent';
import {MainView} from './styles';

export function ZDDashboard(){
    return(
        <MainView>
            <ZDLeftMenu/>
            <ZDMainContent/>
        </MainView>
    )
}

