export interface NetworkElementsState {
    selectedIds: number[];
}

export const SELECT_NETWORK_ELEMENT = 'SELECT_NETWORK_ELEMENT';
export const DESELECT_NETWORK_ELEMENT = 'DESELECT_NETWORK_ELEMENT';

interface SelectNetworkElementAction {
    type: typeof SELECT_NETWORK_ELEMENT;
    id: number;
}

interface DeselectNetworkElementAction {
    type: typeof DESELECT_NETWORK_ELEMENT;
    id: number;
}

export type NetworkElementsActionTypes = SelectNetworkElementAction | DeselectNetworkElementAction;
