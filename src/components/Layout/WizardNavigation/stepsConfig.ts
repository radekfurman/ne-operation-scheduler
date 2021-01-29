import { WizardStepType } from '../../../store/wizardNavigationTypes';

export interface StepConfig {
    label: string;
    description: string;
}

export type StepsConfig = {
    [key in WizardStepType]: StepConfig;
};

export type StepsOrder = {
    [key in WizardStepType]: number;
};

const stepsConfig: StepsConfig = {
    [WizardStepType.NetworkElement]: {
        label: 'Network Element',
        description: 'At least one Network Element shall be selected',
    },
    [WizardStepType.OperationType]: {
        label: 'Operation Type',
        description: 'At least one Operation Type shall be selected',
    },
    [WizardStepType.Summary]: {
        label: 'Summary',
        description: 'Statement of scheduled operation',
    },
};

const stepsOrder: StepsOrder = {
    [WizardStepType.NetworkElement]: 0,
    [WizardStepType.OperationType]: 1,
    [WizardStepType.Summary]: 2,
};

export { stepsConfig, stepsOrder };
