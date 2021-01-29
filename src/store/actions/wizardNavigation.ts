import { SET_NEXT_STEP, SET_PREVIOUS_STEP, WizardNavigationActionTypes } from '../wizardNavigationTypes';

export const setNextStep = (): WizardNavigationActionTypes => {
    return {
        type: SET_NEXT_STEP,
    };
};

export const setPreviousStep = (): WizardNavigationActionTypes => {
    return {
        type: SET_PREVIOUS_STEP,
    };
};
