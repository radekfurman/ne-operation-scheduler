import {
    createStyles,
    makeStyles,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography,
} from '@material-ui/core';
import React from 'react';
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

    return (
        <div className={classes.root}>
            <div>My wizard navigation:</div>
            <Stepper activeStep={1} orientation="vertical">
                {Object.values(stepsConfig).map((stepConfig) => (
                    <Step expanded={true} key={stepConfig.label}>
                        <StepLabel className={classes.label}>{stepConfig.label}</StepLabel>
                        <StepContent>
                        <Typography className={classes.typography} variant="caption">
                                {stepConfig.description}
                            </Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};
