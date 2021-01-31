import { Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restoreNetworkElement } from '../../../store/actions/networkElements';
import { restoreOperation } from '../../../store/actions/operationView';
import { clearScheduleStatus } from '../../../store/actions/schedule';
import { restoreNavigation } from '../../../store/actions/wizardNavigation';
import { RootState } from '../../../store/reducers/root';
import { Status } from '../../../store/scheduleTypes';
import { OperationType } from '../OperationType/operationsData';
import { NetworkElementsSummary } from './NetworkElementsSummary';
import { ScheduleFinishedDialog } from './ScheduleFinishedDialog';
import './SummaryView.css'

export const SummaryView: React.FunctionComponent<{}> = () => {
    const operationToText: {[key in OperationType]: string} = {
        [OperationType.Update]: 'Update Software',
        [OperationType.Downgrade]: 'Downgrade Software'
    };
    const dispatch = useDispatch();
    const operation = useSelector((state: RootState): OperationType => {
        return state.operationView.selectedOperation as OperationType;
    });

    const scheduleReqStatus = useSelector((state: RootState) => {
        return state.scheduleRequest.status;
    });
    const error = useSelector((state: RootState) => {
        return state.scheduleRequest.error;
    });

    const isOpen = (): boolean => {
        return scheduleReqStatus === Status.success || scheduleReqStatus === Status.fail
    }
    const handleClose = (): void => {
        dispatch(clearScheduleStatus())
        dispatch(restoreOperation());
        dispatch(restoreNetworkElement());
        dispatch(restoreNavigation());
    }

    return (
        <div className='SummaryView'>
            <Typography className='Header'>Network Elements</Typography>
            <NetworkElementsSummary className='Content'></NetworkElementsSummary>
            <Typography className='Header'>Operation Type</Typography>
            <Typography className='Content'>{operationToText[operation]}</Typography>
            <ScheduleFinishedDialog open={isOpen()} onClose={handleClose} status={scheduleReqStatus} error={error}></ScheduleFinishedDialog>
        </div>
    );
};
