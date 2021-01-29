import { DESELECT_NETWORK_ELEMENT, NetworkElementsActionTypes, SEARCH_NETWORK_ELEMENT, SELECT_NETWORK_ELEMENT } from "../networkElementsTypes";

export const selectNetworkElement = (id: number): NetworkElementsActionTypes => {
    return {
        type: SELECT_NETWORK_ELEMENT,
        id
    };
};

export const deselectNetworkElement = (id: number): NetworkElementsActionTypes => {
    return {
        type: DESELECT_NETWORK_ELEMENT,
        id
    };
};

export const searchNetworkElement = (searchText: string): NetworkElementsActionTypes => {
    return {
        type: SEARCH_NETWORK_ELEMENT,
        searchText
    };
};