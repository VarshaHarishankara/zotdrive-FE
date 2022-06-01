import React, {useState} from 'react';
import { ZDLeftMenu } from '../components/ZDLeftMenu';
import { ZDMainContent } from '../components/ZDMainContent';
import {MainView} from './styles';

export const ZDDashboard = () => {
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

