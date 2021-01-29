import {
    DESELECT_NETWORK_ELEMENT,
    NetworkElementsActionTypes,
    NetworkElementsState,
    SELECT_NETWORK_ELEMENT,
} from '../networkElementsTypes';

const initialState: NetworkElementsState = {
    selectedIds: [],
};

const networkElementsReducer = (
    state: NetworkElementsState = initialState,
    action: NetworkElementsActionTypes,
): NetworkElementsState => {
    switch (action.type) {
        case SELECT_NETWORK_ELEMENT:
            return {
                ...state,
                selectedIds: [...state.selectedIds, action.id],
            };
        case DESELECT_NETWORK_ELEMENT:
            return {
                ...state,
                selectedIds: [
                    ...state.selectedIds.filter((selectedId) => selectedId !== action.id),
                ],
            };
        default:
            return state;
    }
};

export default networkElementsReducer;
