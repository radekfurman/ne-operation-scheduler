import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/root';
import { OperationType } from '../OperationType/operationsData';
import { NetworkElementsSummary } from './NetworkElementsSummary';
import './SummaryView.css'

export const SummaryView: React.FunctionComponent<{}> = () => {
    const operationToText: {[key in OperationType]: string} = {
        [OperationType.Update]: 'Update Software',
        [OperationType.Downgrade]: 'Downgrade Software'
    };
    const operation = useSelector((state: RootState): OperationType => {
        return state.operationView.selectedOperation as OperationType;
    });

    return (
        <div className='SummaryView'>
            <Typography className='Header'>Network Elements</Typography>
            <NetworkElementsSummary className='Content'></NetworkElementsSummary>
            <Typography className='Header'>Operation Type</Typography>
            <Typography className='Content'>{operationToText[operation]}</Typography>
        </div>
    );
};
