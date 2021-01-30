export interface NetworkElementsState {
    selectedIds: number[];
    searchText: string;
}

export const SELECT_NETWORK_ELEMENT = 'SELECT_NETWORK_ELEMENT';
export const DESELECT_NETWORK_ELEMENT = 'DESELECT_NETWORK_ELEMENT';
export const SEARCH_NETWORK_ELEMENT = 'SEARCH_NETWORK_ELEMENT';
export const RESTORE_NETWORK_ELEMENT = 'RESTORE_NETWORK_ELEMENT';

interface SelectNetworkElementAction {
    type: typeof SELECT_NETWORK_ELEMENT;
    id: number;
}

interface DeselectNetworkElementAction {
    type: typeof DESELECT_NETWORK_ELEMENT;
    id: number;
}

interface SearchNetworkElementAction {
    type: typeof SEARCH_NETWORK_ELEMENT;
    searchText: string;
}

interface RestoreNetworkElementAction {
    type: typeof RESTORE_NETWORK_ELEMENT;
}

export type NetworkElementsActionTypes = SelectNetworkElementAction | DeselectNetworkElementAction | SearchNetworkElementAction | RestoreNetworkElementAction;
