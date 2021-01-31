import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restoreNetworkElement } from '../../../store/actions/networkElements';
import { restoreOperation } from '../../../store/actions/operationView';
import { schedule } from '../../../store/actions/schedule';
import {
    restoreNavigation,
    setNextStep,
    setPreviousStep,
} from '../../../store/actions/wizardNavigation';
import { RootState } from '../../../store/reducers/root';
import { WizardStepType } from '../../../store/wizardNavigationTypes';
import { networksElementTestData } from '../../Views/NetworkElement/networkElementsData';
import { NetworkElementView } from '../../Views/NetworkElement/NetworkElementView';
import { OperationType } from '../../Views/OperationType/operationsData';
import { OperationsView } from '../../Views/OperationType/OperationView';
import { SummaryView } from '../../Views/Summary/SummaryView';
import { navigationConfiguration } from './navigationPreconditions';
import './WizardView.css';

export const WizardView: React.FunctionComponent<{}> = () => {
    const state: RootState = useSelector((state: RootState) => state);
    const selectedNEIds = useSelector((state: RootState) => {
        return state.networkElements.selectedIds;
    });
    const selectedOperation = useSelector((state: RootState) => {
        return state.operationView.selectedOperation;
    });
    const selectedNEs = networksElementTestData.filter((networkElement) => {
        return selectedNEIds.includes(networkElement.id);
    });
    const dispatch = useDispatch();
    const onNextStepClicked = () => dispatch(setNextStep());
    const onPreviousStepClicked = () => dispatch(setPreviousStep());
    const onCancelButtonClicked = () => {
        dispatch(restoreOperation());
        dispatch(restoreNetworkElement());
        dispatch(restoreNavigation());
    };
    const onScheduleButtonClicked = () => {
        dispatch(schedule(selectedNEs, selectedOperation as OperationType));
    };

    const getView = (viewType: WizardStepType): JSX.Element => {
        switch (viewType) {
            case WizardStepType.NetworkElement:
                return <NetworkElementView></NetworkElementView>;
            case WizardStepType.OperationType:
                return <OperationsView></OperationsView>;
            case WizardStepType.Summary:
                return <SummaryView></SummaryView>;
            default:
                return <div>Empty view</div>;
        }
    };

    const isCancelButtonDisabled = (state: RootState): boolean => {
        return !navigationConfiguration[state.wizardNavigation.activeStep].canCancel(state);
    };

    const isNextButtonDisabled = (state: RootState): boolean => {
        return !navigationConfiguration[state.wizardNavigation.activeStep].canGoNext(state);
    };

    const isBackButtonDisabled = (state: RootState): boolean => {
        return !navigationConfiguration[state.wizardNavigation.activeStep].canGoBack(state);
    };

    const isScheduleButtonVisible = (state: RootState): boolean => {
        return state.wizardNavigation.activeStep === WizardStepType.Summary;
    };

    const isScheduleButtonDisabled = (state: RootState): boolean => {
        return !navigationConfiguration[state.wizardNavigation.activeStep].canSchedule(state);
    };

    return (
        <div className='WizardView'>
            {getView(state.wizardNavigation.activeStep)}
            <div className='ButtonContainer'>
                <Button
                    disabled={isCancelButtonDisabled(state)}
                    variant='contained'
                    color='primary'
                    onClick={onCancelButtonClicked}
                >
                    Cancel
                </Button>
                <Button
                    disabled={isBackButtonDisabled(state)}
                    variant='contained'
                    color='primary'
                    onClick={onPreviousStepClicked}
                >
                    Back
                </Button>
                {isScheduleButtonVisible(state) ? (
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={onScheduleButtonClicked}
                        disabled={isScheduleButtonDisabled(state)}
                    >
                        SCHEDULE
                    </Button>
                ) : (
                    <Button
                        disabled={isNextButtonDisabled(state)}
                        variant='contained'
                        color='primary'
                        onClick={onNextStepClicked}
                    >
                        CONTINUE
                    </Button>
                )}
            </div>
        </div>
    );
};
