import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep, setPreviousStep } from '../../../store/actions/wizardNavigation';
import { RootState } from '../../../store/reducers/root';
import { WizardStepType } from '../../../store/wizardNavigationTypes';
import { NetworkElementView } from '../../Views/NetworkElement/NetworkElementView';
import { OperationsView } from '../../Views/OperationType/OperationView';
import { SummaryView } from '../../Views/Summary/SummaryView';
import { navigationConfiguration } from './navigationPreconditions';
import './WizardView.css';

export const WizardView: React.FunctionComponent<{}> = () => {
    const state: RootState = useSelector((state: RootState) => state);

    const dispatch = useDispatch();
    const onNextStepClicked = () => dispatch(setNextStep());
    const onPreviousStepClicked = () => dispatch(setPreviousStep());

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

    const isNextButtonDisabled = (state: RootState): boolean => {
        return !navigationConfiguration[state.wizardNavigation.activeStep].canGoNext(state);
    };

    const isBackButtonDisabled = (state: RootState): boolean => {
        return !navigationConfiguration[state.wizardNavigation.activeStep].canGoBack(state);
    };

    return (
        <div className='WizardView'>
            {getView(state.wizardNavigation.activeStep)}
            <div className='ButtonContainer'>
                <Button
                    disabled={isBackButtonDisabled(state)}
                    variant='contained'
                    color='primary'
                    onClick={onPreviousStepClicked}
                >
                    Back
                </Button>
                <Button
                    disabled={isNextButtonDisabled(state)}
                    variant='contained'
                    color='primary'
                    onClick={onNextStepClicked}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};
