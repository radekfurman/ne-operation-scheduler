import { OperationViewActionTypes, OperationViewState, SET_OPERATION } from "../operationViewTypes";

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
        default:
            return state;
    }
};

export default operationViewReducer;
