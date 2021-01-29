import { DESELECT_NETWORK_ELEMENT, NetworkElementsActionTypes, SELECT_NETWORK_ELEMENT } from "../networkElementsTypes";

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
