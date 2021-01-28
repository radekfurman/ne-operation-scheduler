import {
    Button,
    createStyles,
    makeStyles,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep, setPreviousStep } from '../../../store/actions/wizardNavigation';
import { RootState } from '../../../store/reducers/root';
import { stepsConfig } from './stepsConfig';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
        },
        label: {
            alignItems: 'left',
        },
        typography: {
            width: '80%',
        },
    }),
);

export const WizardNavigation: React.FunctionComponent<{}> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const activeStep = useSelector((state: RootState) => {
        return state.wizardNavigation.activeStep;
    });

    const onNextStepClicked = () => dispatch(setNextStep());
    const onPreviousStepClicked = () => dispatch(setPreviousStep());

    return (
        <div className={classes.root}>
            <div>My wizard navigation:</div>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {Object.values(stepsConfig).map((stepConfig) => (
                    <Step expanded={true} key={stepConfig.label}>
                        <StepLabel className={classes.label}>{stepConfig.label}</StepLabel>
                        <StepContent>
                            <Typography className={classes.typography} variant='caption'>
                                {stepConfig.description}
                            </Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            <Button variant='contained' color='primary' onClick={onPreviousStepClicked}>
                Back
            </Button>
            <Button variant='contained' color='primary' onClick={onNextStepClicked}>
                Next
            </Button>
        </div>
    );
};
