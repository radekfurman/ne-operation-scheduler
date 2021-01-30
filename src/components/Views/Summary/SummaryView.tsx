import { Typography } from '@material-ui/core';
import React from 'react';
import { NetworkElementsSummary } from './NetworkElementsSummary';
import './SummaryView.css'

export const SummaryView: React.FunctionComponent<{}> = () => {
    return (
        <div className='SummaryView'>
            <Typography className='Header'>Network Elements</Typography>
            <NetworkElementsSummary className='Content'></NetworkElementsSummary>
            <Typography className='Header'>Operation Type</Typography>
            <Typography className='Content'>Update Software</Typography>
        </div>
    );
};
