import { Typography } from '@material-ui/core';
import React from 'react';
import './Topbar.css';

export const Topbar: React.FunctionComponent<{}> = () => {
    return (
        <div className='Topbar'>
            <Typography variant='body1'>
                Network Element Operation Scheduler
            </Typography>
        </div>
    );
};
