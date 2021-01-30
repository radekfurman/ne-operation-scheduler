import { RootState } from '../../../store/reducers/root';
import { WizardStepType } from '../../../store/wizardNavigationTypes';

export interface NavigationPrecondition {
    canCancel: (state: RootState) => boolean;
    canGoNext: (state: RootState) => boolean;
    canGoBack: (state: RootState) => boolean;
}

export type NavigationConfiguration = {
    [key in WizardStepType]: NavigationPrecondition;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
const navigationConfiguration: NavigationConfiguration = {
    [WizardStepType.NetworkElement]: {
        canCancel: (state: RootState): boolean => {
            return state.networkElements.selectedIds.length > 0;
        },
        canGoNext: (state: RootState): boolean => {
            return state.networkElements.selectedIds.length > 0;
        },
        canGoBack: (state: RootState): boolean => {
            return false;
        },
    },
    [WizardStepType.OperationType]: {
        canCancel: (state: RootState): boolean => {
            return state.networkElements.selectedIds.length > 0;
        },
        canGoNext: (state: RootState): boolean => {
            return !!state.operationView.selectedOperation;
        },
        canGoBack: (state: RootState): boolean => {
            return true;
        },
    },
    [WizardStepType.Summary]: {
        canCancel: (state: RootState): boolean => {
            return state.networkElements.selectedIds.length > 0;
        },
        canGoNext: (state: RootState): boolean => {
            return false;
        },
        canGoBack: (state: RootState): boolean => {
            return true;
        },
    },
};
/* eslint-enable */
export { navigationConfiguration };
