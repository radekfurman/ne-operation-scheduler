import { OperationType } from "../../components/Views/OperationType/operationsData";
import { OperationViewActionTypes, RESTORE_OPERATION, SET_OPERATION } from "../operationViewTypes";

export const setOperation = (selectedOperation: OperationType | undefined): OperationViewActionTypes => {
    return {
        type: SET_OPERATION,
        selectedOperation
    };
};

export const restoreOperation = (): OperationViewActionTypes => {
    return {
        type: RESTORE_OPERATION
    };
};
