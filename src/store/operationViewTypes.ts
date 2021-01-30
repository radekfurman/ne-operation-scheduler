import { OperationType } from "../components/Views/OperationType/operationsData";

export interface OperationViewState {
    selectedOperation: OperationType | undefined;
}

export const SET_OPERATION = 'SET_OPERATION';
export const RESTORE_OPERATION = 'RESTORE_OPERATION';

interface SetOperationAction {
    type: typeof SET_OPERATION;
    selectedOperation: OperationType | undefined;
}

interface RestoreOperationAction {
    type: typeof RESTORE_OPERATION;
}

export type OperationViewActionTypes = SetOperationAction | RestoreOperationAction;
