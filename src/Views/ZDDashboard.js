import React, {useState} from 'react';
import { ZDLeftMenu } from '../Components/ZDLeftMenu';
import { ZDMainContent } from '../Components/ZDMainContent';
import {MainView} from './styles';

export function ZDDashboard(){
    const [data, setData] = useState(false)
    const handleUpdate = (result) => {
        setData(result)
    }
    return(
        <MainView>
            <ZDLeftMenu updatedData={handleUpdate}/>
            <ZDMainContent results={data}/>
        </MainView>
    )
}

