import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep, setPreviousStep } from '../../../store/actions/wizardNavigation';
import { RootState } from '../../../store/reducers/root';
import { WizardStepType } from '../../../store/wizardNavigationTypes';
import { NetworkElement } from '../../Views/NetworkElement/NetworkElement';
import { OperationType } from '../../Views/OperationType/OperationType';
import { Summary } from '../../Views/Summary/Summary';
import './WizardView.css';

export const WizardView: React.FunctionComponent<{}> = () => {
    const activeStep = useSelector((state: RootState) => {
        return state.wizardNavigation.activeStep;
    });
    const dispatch = useDispatch();
    const onNextStepClicked = () => dispatch(setNextStep());
    const onPreviousStepClicked = () => dispatch(setPreviousStep());

    const getView = (viewType: WizardStepType): JSX.Element => {
        switch (viewType) {
            case WizardStepType.NetworkElement:
                return <NetworkElement></NetworkElement>;
            case WizardStepType.OperationType:
                return <OperationType></OperationType>;
            case WizardStepType.Summary:
                return <Summary></Summary>;
            default:
                return <div>Empty view</div>;
        }
    };

    const isNextButtonDisabled = (viewType: WizardStepType) => {
        return viewType === WizardStepType.Summary;
    }

    const isBackButtonDisabled = (viewType: WizardStepType) => {
        return viewType === WizardStepType.NetworkElement;
    }

    return (
        <div className='WizardView'>
            {getView(activeStep)}
            <div className='ButtonContainer'>
                <Button disabled={isBackButtonDisabled(activeStep)} variant='contained' color='primary' onClick={onPreviousStepClicked}>
                    Back
                </Button>
                <Button disabled={isNextButtonDisabled(activeStep)} variant='contained' color='primary' onClick={onNextStepClicked}>
                    Next
            </Button>
            </div>
        </div>
    );
};
