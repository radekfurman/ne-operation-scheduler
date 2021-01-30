import {
    DESELECT_NETWORK_ELEMENT,
    NetworkElementsActionTypes,
    NetworkElementsState,
    RESTORE_NETWORK_ELEMENT,
    SEARCH_NETWORK_ELEMENT,
    SELECT_NETWORK_ELEMENT,
} from '../networkElementsTypes';

const initialState: NetworkElementsState = {
    selectedIds: [],
    searchText: ''
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
        case SEARCH_NETWORK_ELEMENT:
            return {
                ...state,
                searchText: action.searchText
            }
        case RESTORE_NETWORK_ELEMENT:
            return {
                ...initialState
            }
        default:
            return state;
    }
};

export default networkElementsReducer;
