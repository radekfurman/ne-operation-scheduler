import { OperationType } from "../../components/Views/OperationType/operationsData";
import { OperationViewActionTypes, SET_OPERATION } from "../operationViewTypes";

export const setOperation = (selectedOperation: OperationType | undefined): OperationViewActionTypes => {
    return {
        type: SET_OPERATION,
        selectedOperation
    };
};
