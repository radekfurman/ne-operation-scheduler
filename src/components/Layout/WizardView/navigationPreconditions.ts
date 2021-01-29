import { RootState } from '../../../store/reducers/root';
import { WizardStepType } from '../../../store/wizardNavigationTypes';

export interface NavigationPrecondition {
    canGoNext: (state: RootState) => boolean;
    canGoBack: (state: RootState) => boolean;
}

export type NavigationConfiguration = {
    [key in WizardStepType]: NavigationPrecondition;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
const navigationConfiguration: NavigationConfiguration = {
    [WizardStepType.NetworkElement]: {
        canGoNext: (state: RootState): boolean => {
            return state.networkElements.selectedIds.length > 0;
        },
        canGoBack: (state: RootState): boolean => {
            return false;
        },
    },
    [WizardStepType.OperationType]: {
        canGoNext: (state: RootState): boolean => {
            return true;
        },
        canGoBack: (state: RootState): boolean => {
            return true;
        },
    },
    [WizardStepType.Summary]: {
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
