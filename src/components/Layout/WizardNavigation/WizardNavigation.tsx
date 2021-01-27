import { Step, Stepper } from '@material-ui/core';
import React from 'react';

export const WizardNavigation: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <div>My wizard navigation:</div>
            <Stepper activeStep={1} orientation="vertical">
                <Step></Step>
            </Stepper>
        </div>
    );
};
