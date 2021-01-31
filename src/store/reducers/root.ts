import { combineReducers } from 'redux';
import networkElementsReducer from './networkElements';
import operationViewReducer from './operationView';
import scheduleRequestReducer from './schedule';
import wizardNavigationReducer from './wizardNavigation';

export const rootReducer = combineReducers({
    wizardNavigation: wizardNavigationReducer,
    networkElements: networkElementsReducer,
    operationView: operationViewReducer,
    scheduleRequest: scheduleRequestReducer
});

export type RootState = ReturnType<typeof rootReducer>;
