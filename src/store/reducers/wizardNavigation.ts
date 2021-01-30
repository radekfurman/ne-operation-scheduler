import {
    RESTORE_NAVIGATION,
    SET_NEXT_STEP,
    SET_PREVIOUS_STEP,
    WizardNavigationActionTypes,
    WizardNavigationState,
    WizardStepType,
} from '../wizardNavigationTypes';

const initialState: WizardNavigationState = {
    activeStep: WizardStepType.NetworkElement,
};

const wizardNavigationReducer = (
    state: WizardNavigationState = initialState,
    action: WizardNavigationActionTypes,
): WizardNavigationState => {
    switch (action.type) {
        case SET_NEXT_STEP:
            return {
                ...state,
                activeStep: state.activeStep + 1,
            };
        case SET_PREVIOUS_STEP:
            return {
                ...state,
                activeStep: state.activeStep - 1,
            };
        case RESTORE_NAVIGATION:
            return {
                ...initialState
            }
        default:
            return state;
    }
};

export default wizardNavigationReducer;
