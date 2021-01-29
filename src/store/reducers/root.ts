import { combineReducers } from 'redux';
import networkElementsReducer from './networkElements';
import wizardNavigationReducer from './wizardNavigation';

export const rootReducer = combineReducers({
    wizardNavigation: wizardNavigationReducer,
    networkElements: networkElementsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
