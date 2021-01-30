import { OperationViewActionTypes, OperationViewState, RESTORE_OPERATION, SET_OPERATION } from "../operationViewTypes";

const initialState: OperationViewState = {
    selectedOperation: undefined
};

const operationViewReducer = (
    state: OperationViewState = initialState,
    action: OperationViewActionTypes,
): OperationViewState => {
    switch (action.type) {
        case SET_OPERATION:
            return {
                ...state,
                selectedOperation: action.selectedOperation,
            };
        case RESTORE_OPERATION:
            return {
                ...initialState
            }
        default:
            return state;
    }
};

export default operationViewReducer;
