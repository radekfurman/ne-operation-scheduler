import { OperationType } from "../components/Views/OperationType/operationsData";

export interface OperationViewState {
    selectedOperation: OperationType | undefined;
}

export const SET_OPERATION = 'SET_OPERATION';

interface SetOperationAction {
    type: typeof SET_OPERATION;
    selectedOperation: OperationType | undefined;
}

export type OperationViewActionTypes = SetOperationAction;
