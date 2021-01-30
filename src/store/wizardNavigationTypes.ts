export enum WizardStepType {
    NetworkElement = 0,
    OperationType = 1,
    Summary = 2,
}

export interface WizardNavigationState {
    activeStep: WizardStepType;
}

export const SET_NEXT_STEP = 'SET_NEXT_STEP';
export const SET_PREVIOUS_STEP = 'SET_PREVIOUS_STEP';
export const RESTORE_NAVIGATION = 'RESTORE_NAVIGATION';

interface SetNextStepAction {
    type: typeof SET_NEXT_STEP;
}

interface SetPreviousStepAction {
    type: typeof SET_PREVIOUS_STEP;
}

interface RestoreNavigationAction {
    type: typeof RESTORE_NAVIGATION;
}

export type WizardNavigationActionTypes = SetNextStepAction | SetPreviousStepAction | RestoreNavigationAction;
