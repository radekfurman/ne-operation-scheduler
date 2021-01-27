import { SET_NEXT_STEP, SET_PREVIOUS_STEP, WizardNavigationActionTypes } from './types';

export function setNextStep(): WizardNavigationActionTypes {
    return {
        type: SET_NEXT_STEP,
    };
}

export function setPreviousStep(): WizardNavigationActionTypes {
    return {
        type: SET_PREVIOUS_STEP,
    };
}
